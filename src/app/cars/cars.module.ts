import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CarsComponent } from './cars.component';

import { CarsListComponent } from './cars-list/cars-list.component';

@NgModule({
  declarations: [
    CarsComponent, CarsListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ CarsComponent ]
})
export class CarsModule { }
