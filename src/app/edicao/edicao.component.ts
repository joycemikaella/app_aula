import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edicao',
  templateUrl: './edicao.component.html',
  styleUrls: ['./edicao.component.css']
})
export class EdicaoComponent implements OnInit {
  blocoVisivel: boolean = false
  rotuloBotao: string = 'Show'

  constructor() { }

  ngOnInit(): void {
  }

  ativar(): void {
    this.blocoVisivel = !this.blocoVisivel
    if (this.rotuloBotao == 'Show') {
      this.rotuloBotao = 'Esconder'

    } else {
      this.rotuloBotao = 'Show'
    }
  }
}
