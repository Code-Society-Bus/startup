import { Component, OnInit} from '@angular/core';
import Splide from '@splidejs/splide';


@Component({
  selector: 'app-opinion',
  templateUrl: './opinion.component.html',
  styleUrls: ['./opinion.component.css']
})
export class OpinionComponent implements OnInit {

  ngOnInit() {
    let splide = new Splide( '#splide3' );
    splide.mount();
  }


}
