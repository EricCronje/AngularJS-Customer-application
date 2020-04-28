import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { CustomersModule } from './customers/customers.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  bootstrap:    [ AppComponent ],
  declarations: [ AppComponent ],
  imports:      [ BrowserModule, CustomersModule, SharedModule, CoreModule, AppRoutingModule ],
})
export class AppModule { }
