import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TecnologyRoutingModule } from './tecnology-routing.module';
import { TecnologyComponent } from './tecnology.component';


@NgModule({
  declarations: [
    TecnologyComponent
  ],
  imports: [
    CommonModule,
    TecnologyRoutingModule
  ],
  exports: [
    TecnologyComponent
  ]
})
export class TecnologyModule { }
