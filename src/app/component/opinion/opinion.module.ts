import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OpinionRoutingModule } from './opinion-routing.module';
import { OpinionComponent } from './opinion.component';


@NgModule({
  declarations: [
    OpinionComponent
  ],
  imports: [
    CommonModule,
    OpinionRoutingModule
  ],
  exports: [
    OpinionComponent
  ]
})
export class OpinionModule { }
