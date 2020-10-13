import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  fotos = [
    './../assets/foto01.jpg',
    './../assets/foto2.jpg',
    './../assets/foto3.jpg',
    './../assets/foto4.jpg',
    './../assets/foto5.jpg',
  ];

  fotosPessoas = [];

  botoes = [
    '|<',
    '<',
    '>',
    '>|',
  ];
  onClick(i: number) {
    console.log(i);
  }
}
