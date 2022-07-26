import { Component, OnInit } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { Options, LabelType } from '@angular-slider/ngx-slider';
import { ApiService } from './../../service/api.service';

@Component({
  selector: 'app-listar-atrasados',
  templateUrl: './listar-atrasados.component.html',
  styleUrls: ['./listar-atrasados.component.css']
})
export class ListarAtrasadosComponent implements OnInit {
  constructor(
    private apiService: ApiService
    ) { }


    isbn: string
    emprestimos: any = []
    emprestimoAtual: any = null
    indexAtual = -1

  
  ngOnInit() {
    this.buscarEmprestimosAtrasados()
  }

  setEmprestimoAtual(exemplar: any, index: any): void {
    this.emprestimoAtual = exemplar;
    this.indexAtual = index;
  }

  buscarEmprestimosAtrasados() {
    this.apiService.buscarEmprestimosAtrasados().subscribe(data => {
  
      console.log(data);
      this.emprestimos = data;
    });
  }

}


