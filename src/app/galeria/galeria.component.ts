import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.scss']
})
export class GaleriaComponent implements OnInit {

  firsted = true;
  previed = true;
  nexted = true;
  lasted = true;
  currentImage = 1;
  isValid = false;

  @Input() title: string;
  @Input() modalImagens: string[];
  @Input() modalBotoes: string[];
  @Output() acaoBotao = new EventEmitter<number>();

  constructor(
  ) { }

  ngOnInit() {
    console.log(this.modalImagens.length);
    if (this.modalImagens.length > 0) {
      this.isValid = true;
    } else {
      console.log('outro Valor');
      this.isValid = false;
    }
  }

  showDiv(which) {
    var i;
    var slides = document.getElementsByClassName("carrousel-fotos");
    for (i = 0; i < slides.length; i++) {
      const slide = slides[i] as HTMLElement;
      slide.style.display = "none";
    }
    this.currentImage++;
    if (this.currentImage > slides.length) {
      this.currentImage = 5;
    }

    if (which <= 1) which = 1;
    if (which >= 5) which = 5;
    this.currentImage = which;
    const slide = slides[this.currentImage - 1] as HTMLElement;
    slide.style.display = "block";
  }

}
