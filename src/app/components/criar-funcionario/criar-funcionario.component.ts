import { Router } from '@angular/router';
import { ApiService } from './../../service/api.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from "@angular/forms";

@Component({
  selector: 'app-criar-funcionario',
  templateUrl: './criar-funcionario.component.html',
  styleUrls: ['./criar-funcionario.component.css']
})
export class CriarFuncionarioComponent implements OnInit {
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
      this.apiService.criarFuncionario({
        nome: this.userForm.value.name,
        senha: this.userForm.value.password,
        email: this.userForm.value.email,
        funcao: "funcionario"
      }).subscribe(
        (res: any) => {
          if (res) {
            window.alert('Cadastro realizado com sucesso!');
            console.log('Usuário criado com sucesso!');
            this.router.navigate([''])
          }
          else {
            window.alert('Esse usuário já existe! Tente novamente.');
          }
        }, (error) => {
          console.log(error);
        });
    }
  }

}
