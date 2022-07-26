import { Router } from '@angular/router';
import { ApiService } from './../../service/api.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from "@angular/forms";
@Component({
  selector: 'app-cadastrar-publicacao',
  templateUrl: './cadastrar-publicacao.component.html',
  styleUrls: ['./cadastrar-publicacao.component.css']
})
export class CadastrarPublicacaoComponent implements OnInit {
  submitted = false;
  publicacaoForm: FormGroup;
  
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
    this.publicacaoForm = this.fb.group({
      isbn: ['', [Validators.required]],
      titulo: ['', [Validators.required]],
      autor: ['', [Validators.required]],
      editora: ['', [Validators.required]]
    })
  }

  updateProfile(e: any){
    this.publicacaoForm.get('designation').setValue(e, {
      onlySelf: true
    })
  }

  get myForm(): { [key: string]: AbstractControl; }{
    return this.publicacaoForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (!this.publicacaoForm.valid) {
      return false;
    } else {
      this.apiService.cadastrarPublicacao(this.publicacaoForm.value).subscribe(
        (res: any) => {
          if (res) {
            window.alert('Cadastro realizado com sucesso!');
            console.log('Associado criado com sucesso!');
            this.router.navigate([''])
          }
          else {
            window.alert('Erro ao cadastrar publicação! Tente novamente.');
          }
        }, (error) => {
          console.log(error);
        });
    }
  }

}
