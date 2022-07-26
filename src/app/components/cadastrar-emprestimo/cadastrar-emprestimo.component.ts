import { Router } from '@angular/router';
import { ApiService } from './../../service/api.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from "@angular/forms";

@Component({
  selector: 'app-cadastrar-emprestimo',
  templateUrl: './cadastrar-emprestimo.component.html',
  styleUrls: ['./cadastrar-emprestimo.component.css']
})
export class CadastrarEmprestimoComponent implements OnInit {
  submitted = false;
  emprestimoForm: FormGroup;
  
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
    this.emprestimoForm = this.fb.group({
      nro_exemplar: ['', [Validators.required]],
      isbn: ['', [Validators.required]],
      codigo_assoc: ['', [Validators.required]],
    })
  }

  updateProfile(e: any){
    this.emprestimoForm.get('designation').setValue(e, {
      onlySelf: true
    })
  }

  get myForm(): { [key: string]: AbstractControl; }{
    return this.emprestimoForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (!this.emprestimoForm.valid) {
      return false;
    } else {
      this.apiService.cadastrarEmprestimo(this.emprestimoForm.value).subscribe(
        (res: any) => {
          if (res) {
            console.log(res)
            window.alert('Cadastro realizado com sucesso!');
            console.log('Emprestimo criado com sucesso!');
            this.router.navigate([''])
          }
          else {
            window.alert('Erro ao cadastrar emprestimo! Tente novamente.');
          }
        }, (error) => {
          window.alert('Alguem na frente!');
        });
    }
  }
}
