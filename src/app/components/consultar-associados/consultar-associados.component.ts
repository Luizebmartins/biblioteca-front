import { Component, OnInit } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { Options, LabelType } from '@angular-slider/ngx-slider';
import { ApiService } from './../../service/api.service';

@Component({
  selector: 'app-consultar-associados',
  templateUrl: './consultar-associados.component.html',
  styleUrls: ['./consultar-associados.component.css']
})
export class ConsultarAssociadosComponent implements OnInit {
  constructor(
    private apiService: ApiService
    ) { }



    associados: any = []
    asssociadoAtual: any = null
    indexAtual = -1

  
  ngOnInit() {
    this.buscarAssociados()
  }

  setAsssociadoAtual(exemplar: any, index: any): void {
    this.asssociadoAtual = exemplar;
    this.indexAtual = index;
  }

  buscarAssociados() {
    this.apiService.buscarAssociados().subscribe(data => {
  
      console.log(data);
      this.associados = data;
    });
  }

}
