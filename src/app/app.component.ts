import { Component } from '@angular/core';
interface Icontato {
  id: number
  nome: string
  email: string
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My first site Angular';
  nome:string = 'Joyce Mikaella'
  idade:number = 27

  contato: Icontato = {
    id : 1,
    nome: 'Mikaella Aciole',
    email: 'mikaciole@gmail.com'
  }
}

