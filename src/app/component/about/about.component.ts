import { Component, OnInit} from '@angular/core';
import Splide from '@splidejs/splide';



@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit{



  ngOnInit() {
    let splide = new Splide( '#splide1', {
      type   : 'loop',
      padding: '5rem',
    } );

    splide.mount();
  }


  translateValue: string = '-1086.59';

  cambiarTransformacion(valor: string) {
    // Lógica para cambiar la transformación
    // Puedes cambiar la lógica según tus necesidades
    if (valor === '1') {
      this.translateValue = '-1086.59';
    } else if (valor === '2') {
      this.translateValue = '-1700.72';
    } else if (valor === '3') {
      this.translateValue = '-2318.19';
    }
  }

 /*  currentTranslateX: number = 0;
  moveSliderRight() {
    this.currentTranslateX -= 0; // Cambia el valor según tus necesidades
  }

  moveSliderCenter() {
    this.currentTranslateX -= 600; // Cambia el valor según tus necesidades
  }

  moveSliderLeft() {
    this.currentTranslateX += 600; // Cambia el valor según tus necesidades
  } */

}
