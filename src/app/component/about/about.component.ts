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

}
