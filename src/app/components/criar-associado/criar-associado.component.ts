import { Router } from '@angular/router';
import { ApiService } from './../../service/api.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from "@angular/forms";

@Component({
  selector: 'app-criar-associado',
  templateUrl: './criar-associado.component.html',
  styleUrls: ['./criar-associado.component.css']
})
export class CriarAssociadoComponent implements OnInit {
  submitted = false;
  userForm: FormGroup;
  
  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: ApiService
  ) { 
    this.mainForm();
  }

  ngOnInit() { }

  mainForm() {
    this.userForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      password: ['', [Validators.required]],
      endereco: ['', [Validators.required]],
      status: ['', [Validators.required]]
    })
  }

  updateProfile(e: any){
    this.userForm.get('designation').setValue(e, {
      onlySelf: true
    })
  }

  get myForm(): { [key: string]: AbstractControl; }{
    return this.userForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (!this.userForm.valid) {
      return false;
    } else {
      console.log(this.userForm.value)
      this.apiService.criarAssociado({
        nome: this.userForm.value.name,
        senha: this.userForm.value.password,
        email: this.userForm.value.email,
        endereco: this.userForm.value.endereco,
        status: this.userForm.value.status,
      }).subscribe(
        (res: any) => {
          if (res) {
            window.alert('Cadastro realizado com sucesso!');
            console.log('Associado criado com sucesso!');
            this.router.navigate([''])
          }
          else {
            window.alert('Esse Associado já existe! Tente novamente.');
          }
        }, (error) => {
          console.log(error);
        });
    }
  }

}
