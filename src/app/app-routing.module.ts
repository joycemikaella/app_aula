import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { DetalheComponent } from './detalhe/detalhe.component';
import { EdicaoComponent } from './edicao/edicao.component';

const routes: Routes = [

  {
    path: 'cadastro',
    component: CadastroComponent
  },
  {
    path: 'consulta',
    component: ConsultaComponent
  },
  {
    path: 'edicao',
    component: EdicaoComponent
  },
  {
  path: 'produto/:idproduto', 
    component: DetalheComponent
  }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
