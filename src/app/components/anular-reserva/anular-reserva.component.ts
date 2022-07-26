import { Router } from '@angular/router';
import { ApiService } from './../../service/api.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from "@angular/forms";
@Component({
  selector: 'app-anular-reserva',
  templateUrl: './anular-reserva.component.html',
  styleUrls: ['./anular-reserva.component.css']
})
export class AnularReservaComponent implements OnInit {
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
    if (!this.reservaForm.valid) {
      return false;
    } else {
      console.log(this.reservaForm.value)
      this.apiService.anularReserva(this.reservaForm.value).subscribe(
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
