import { Component, OnInit } from '@angular/core';
import { IProduto } from '../interfaces/IProduto';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent /*implements OnInit*/ {/*
  nome: string = 'Joyce'
  idade: number = 27
  desabilitarBotao: boolean = true

  ngOnInit(): void {
  }

  ativar():void{
    this.desabilitarBotao = !this.desabilitarBotao
  }*/

  produtos: IProduto[] = [
    {
      id: 1,
      descricao: 'Feijão',
      preco: 10
    },

    {
      id: 2,
      descricao: 'Farinha',
      preco: 12.55
    },

    {
      id: 3,
      descricao: 'Cuscuz',
      preco: 4.89
    }
  ]
  constructor() { }

}
