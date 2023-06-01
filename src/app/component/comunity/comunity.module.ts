import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComunityRoutingModule } from './comunity-routing.module';
import { ComunityComponent } from './comunity.component';


@NgModule({
  declarations: [
    ComunityComponent
  ],
  imports: [
    CommonModule,
    ComunityRoutingModule
  ]
})
export class ComunityModule { }
