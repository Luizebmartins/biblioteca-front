import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



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



const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/' },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'criarFuncionario', component: CriarFuncionarioComponent },
  { path: 'criarAssociado', component: CriarAssociadoComponent },
  { path: 'cadastrarPublicacao', component: CadastrarPublicacaoComponent },
  { path: 'cadastrarExemplar', component: CadastrarExemplarComponent },
  { path: 'consultarPublicacao', component: ConsultarPublicacaoComponent },
  { path: 'consultarExemplaresDisponiveis', component: ConsultaExemplaresDisponiveisComponent },
  { path: 'cadastrarEmprestimo', component: CadastrarEmprestimoComponent },
  { path: 'devolverLivro', component: DevolverLivroComponent },
  { path: 'consultarAtrasados', component: ListarAtrasadosComponent },
  { path: 'cadastrarReserva', component: CriarReservaComponent },
  { path: 'consultarReservas', component: ConsultarReservasComponent },
  { path: 'anularReserva', component: AnularReservaComponent },
  { path: 'consultarAssociados', component: ConsultarAssociadosComponent },
  { path: 'consultarPublicacoes', component: ConsultarPublicacoesComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }