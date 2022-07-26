import { Router } from '@angular/router';
import { ApiService } from './../../service/api.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from "@angular/forms";

@Component({
  selector: 'app-devolver-livro',
  templateUrl: './devolver-livro.component.html',
  styleUrls: ['./devolver-livro.component.css']
})
export class DevolverLivroComponent implements OnInit {
  submitted = false;
  devolucaoForm: FormGroup;
  
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
    this.devolucaoForm = this.fb.group({
      nro_exemplar: ['', [Validators.required]],
      isbn: ['', [Validators.required]],
      codigo_assoc: ['', [Validators.required]],
    })
  }

  updateProfile(e: any){
    this.devolucaoForm.get('designation').setValue(e, {
      onlySelf: true
    })
  }

  get myForm(): { [key: string]: AbstractControl; }{
    return this.devolucaoForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (!this.devolucaoForm.valid) {
      return false;
    } else {
      this.apiService.devolverLivro(this.devolucaoForm.value).subscribe(
        (res: any) => {
          if (res) {
            window.alert(`Devolução realizada com sucesso!\nMulta a ser paga: ${res.multa}`);
            console.log('Devolução realizada com sucesso!');
            this.router.navigate([''])
          }
          else {
            window.alert('Erro ao devolver livro! Tente novamente.');
          }
        }, (error) => {
          console.log(error);
        });
    }
  }
}
