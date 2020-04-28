import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/customers' },
    { path: '**', pathMatch: 'full', redirectTo: '/customers' },
];

@NgModule({
    exports: [ RouterModule ],
    imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule {

}
