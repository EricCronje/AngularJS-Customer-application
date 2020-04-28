import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Adds the ngModule! to be used on the template
import { CommonModule } from '@angular/common';

import { CustomersComponent } from './customers.component';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { CustomersFilterTextboxComponent } from './customers-list/customers-filter-textbox/customers-filter-textbox.component';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    CustomersComponent,
    CustomersListComponent,
    CustomersFilterTextboxComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule
  ],
  exports: [ CustomersComponent ]
})
export class CustomersModule { }
