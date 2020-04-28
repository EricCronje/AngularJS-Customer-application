import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from './customers.component';

const routes: Routes = [
    { path: 'customers', pathMatch: 'full',  component: CustomersComponent },
];

@NgModule({
    exports: [ RouterModule ],
    imports: [ RouterModule.forChild(routes) ],
})
export class CustomersRoutingModule {

}
