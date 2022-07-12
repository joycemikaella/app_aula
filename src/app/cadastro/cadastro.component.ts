import { Component, OnInit } from '@angular/core';
import { IContato } from '../interfaces/IContato';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  /*
    nome: string = 'Joyce'
    idade: number = 27
    fruta: string = 'Manguitas'
  
  
    mudar(evento:any):void{
      this.fruta = evento
    }
    alterar(evento:any): void{
      this.fruta = evento.target.value
    }
    */
  constructor() { }

  ngOnInit(): void {
  }

  /*contato: IContato = {nome: '', idade: 0, email: '' }*/
  contatos: IContato[] = []

  save(dados: any): void {
    let contato: IContato = { nome: '', idade: 0, email: '' }
    contato.nome = dados.nome
    contato.idade = dados.idade
    contato.email = dados.email
    this.contatos.push(contato)
    /*console.log(dados)*/
  }

}
