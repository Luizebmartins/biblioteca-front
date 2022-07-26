import { Component, OnInit } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { Options, LabelType } from '@angular-slider/ngx-slider';
import { ApiService } from './../../service/api.service';

@Component({
  selector: 'app-consultar-reservas',
  templateUrl: './consultar-reservas.component.html',
  styleUrls: ['./consultar-reservas.component.css']
})
export class ConsultarReservasComponent implements OnInit {
  constructor(
    private apiService: ApiService
    ) { }


    isbn: string
    reservas: any = []
    reservaAtual: any = null
    indexAtual = -1

  
  ngOnInit() {
  }

  setReservaAtual(exemplar: any, index: any): void {
    this.reservaAtual = exemplar;
    this.indexAtual = index;
  }

  buscarReservas() {
    if(this.isbn) {
      this.apiService.buscarReservasPorIsbn(this.isbn).subscribe(data => {
  
        console.log(data);
        this.reservas = data;
      });
    } else {
      this.reservas = []
      this.reservaAtual = null
    }
  }

}
