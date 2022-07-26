import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { NgRatingBarModule } from 'ng-rating-bar';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';


import { ApiService } from './service/api.service';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { CriarFuncionarioComponent } from './components/criar-funcionario/criar-funcionario.component';
import { CriarAssociadoComponent } from './components/criar-associado/criar-associado.component';
import { CadastrarPublicacaoComponent } from './components/cadastrar-publicacao/cadastrar-publicacao.component';
import { CadastrarExemplarComponent } from './components/cadastrar-exemplar/cadastrar-exemplar.component';
import { ConsultarPublicacaoComponent } from './components/consultar-publicacao/consultar-publicacao.component';
import { ConsultaExemplaresDisponiveisComponent } from './components/consulta-exemplares-disponiveis/consulta-exemplares-disponiveis.component';
import { CadastrarEmprestimoComponent } from './components/cadastrar-emprestimo/cadastrar-emprestimo.component';
import { DevolverLivroComponent } from './components/devolver-livro/devolver-livro.component';
import { ListarAtrasadosComponent } from './components/listar-atrasados/listar-atrasados.component';
import { CriarReservaComponent } from './components/criar-reserva/criar-reserva.component';
import { ConsultarReservasComponent } from './components/consultar-reservas/consultar-reservas.component';
import { AnularReservaComponent } from './components/anular-reserva/anular-reserva.component';
import { ConsultarAssociadosComponent } from './components/consultar-associados/consultar-associados.component';
import { ConsultarPublicacoesComponent } from './components/consultar-publicacoes/consultar-publicacoes.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    CriarFuncionarioComponent,
    CriarAssociadoComponent,
    CadastrarPublicacaoComponent,
    CadastrarExemplarComponent,
    ConsultarPublicacaoComponent,
    ConsultaExemplaresDisponiveisComponent,
    CadastrarEmprestimoComponent,
    DevolverLivroComponent,
    ListarAtrasadosComponent,
    CriarReservaComponent,
    ConsultarReservasComponent,
    AnularReservaComponent,
    ConsultarAssociadosComponent,
    ConsultarPublicacoesComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgMultiSelectDropDownModule.forRoot(),
    NgxSliderModule,
    NgRatingBarModule
  ],
  providers: [
    ApiService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
