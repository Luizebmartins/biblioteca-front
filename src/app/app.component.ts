import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Biblioteca';
  userId = localStorage.getItem('userId');
  name = localStorage.getItem('userName');
  funcao = localStorage.getItem('funcao');
}


