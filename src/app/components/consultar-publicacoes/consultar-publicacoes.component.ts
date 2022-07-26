import { Component, OnInit } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { Options, LabelType } from '@angular-slider/ngx-slider';
import { ApiService } from './../../service/api.service';

@Component({
  selector: 'app-consultar-publicacoes',
  templateUrl: './consultar-publicacoes.component.html',
  styleUrls: ['./consultar-publicacoes.component.css']
})
export class ConsultarPublicacoesComponent implements OnInit {
  constructor(
    private apiService: ApiService
    ) { }


    publicacoes: any = []
    publicacaoAtual: any = null
    indexAtual = -1

  
  ngOnInit() {
    this.buscarPublicacoes()
  }

  setPublicacaoAtual(exemplar: any, index: any): void {
    this.publicacaoAtual = exemplar;
    this.indexAtual = index;
  }

  buscarPublicacoes() {
    this.apiService.buscarPublicacoes().subscribe(data => {
  
      console.log(data);
      this.publicacoes = data;
    });
  }
}
