import { Component, OnInit } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { Options, LabelType } from '@angular-slider/ngx-slider';
import { ApiService } from './../../service/api.service';

@Component({
  selector: 'app-consultar-publicacao',
  templateUrl: './consultar-publicacao.component.html',
  styleUrls: ['./consultar-publicacao.component.css']
})
export class ConsultarPublicacaoComponent implements OnInit {
  constructor(
    private apiService: ApiService
    ) { }


    isbn: string
    exemplares: any = []
    exemplarAtual: any = null
    indexAtual = -1

  
  ngOnInit() {
  }

  setExemplarAtual(exemplar: any, index: any): void {
    this.exemplarAtual = exemplar;
    this.indexAtual = index;
  }

  buscarExemplares() {
    if(this.isbn) {
      this.apiService.buscarExemplarPorIsbn(this.isbn).subscribe(data => {
  
        console.log(data);
        this.exemplares = data;
      });
    } else {
      this.exemplares = []
      this.exemplarAtual = null
    }
  }

  
}
