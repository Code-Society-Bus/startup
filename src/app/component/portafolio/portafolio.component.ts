import { Component, OnInit} from '@angular/core';
import Splide from '@splidejs/splide';



@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent implements OnInit{

  ngOnInit() {
    let splide = new Splide( '#splide2' );
    splide.mount();
  }


  }
