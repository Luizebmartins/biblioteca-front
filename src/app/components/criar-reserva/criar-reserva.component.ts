import { Router } from '@angular/router';
import { ApiService } from './../../service/api.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from "@angular/forms";

@Component({
  selector: 'app-criar-reserva',
  templateUrl: './criar-reserva.component.html',
  styleUrls: ['./criar-reserva.component.css']
})
export class CriarReservaComponent implements OnInit {
  submitted = false;
  reservaForm: FormGroup;
  
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
    this.reservaForm = this.fb.group({
      codigo_assoc: ['', [Validators.required]],
      isbn: ['', [Validators.required]],
    })
  }

  updateProfile(e: any){
    this.reservaForm.get('designation').setValue(e, {
      onlySelf: true
    })
  }

  get myForm(): { [key: string]: AbstractControl; }{
    return this.reservaForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.reservaForm.valid)
    if (!this.reservaForm.valid) {
      return false;
    } else {
      this.apiService.cadastrarReserva({
        isbn: this.reservaForm.value.isbn,
        codigo_assoc: this.reservaForm.value.codigo_assoc,
        status: "Iniciado"
      }).subscribe(
        (res: any) => {
          if (res) {
            window.alert('Reserva criada com sucesso!');
            console.log('Reserva criada  com sucesso!');
            this.router.navigate([''])
          }
          else {
            window.alert('Erro ao criar reserva! Tente novamente.');
          }
        }, (error) => {
          console.log(error);
        });
    }
  }
}
