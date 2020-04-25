import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CarsComponent } from './cars.component';

@NgModule({
  declarations: [
    CarsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ CarsComponent ]
})
export class CarsModule { }
