import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersComponent } from './customers.component';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { CustomersFilterTextboxComponent } from './customers-list/customers-filter-textbox/customers-filter-textbox.component';

@NgModule({
  declarations: [
    CustomersComponent,
    CustomersListComponent,
    CustomersFilterTextboxComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ CustomersComponent ]
})
export class CustomersModule { }
