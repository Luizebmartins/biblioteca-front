import { Router } from '@angular/router';
import { ApiService } from './../../service/api.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from "@angular/forms";
@Component({
  selector: 'app-cadastrar-exemplar',
  templateUrl: './cadastrar-exemplar.component.html',
  styleUrls: ['./cadastrar-exemplar.component.css']
})
export class CadastrarExemplarComponent implements OnInit {
  submitted = false;
  exemplarForm: FormGroup;
  
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
    this.exemplarForm = this.fb.group({
      numero: ['', [Validators.required]],
      isbn: ['', [Validators.required]],
      preco: ['', [Validators.required]],
    })
  }

  updateProfile(e: any){
    this.exemplarForm.get('designation').setValue(e, {
      onlySelf: true
    })
  }

  get myForm(): { [key: string]: AbstractControl; }{
    return this.exemplarForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (!this.exemplarForm.valid) {
      return false;
    } else {
      this.apiService.cadastrarExemplar(this.exemplarForm.value).subscribe(
        (res: any) => {
          if (res) {
            window.alert('Cadastro realizado com sucesso!');
            console.log('exemplar criado com sucesso!');
            this.router.navigate([''])
          }
          else {
            window.alert('Erro ao cadastrar exemplar! Tente novamente.');
          }
        }, (error) => {
          console.log(error);
        });
    }
  }
}
