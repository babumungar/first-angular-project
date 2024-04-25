import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ParentcomponentComponent } from './parentcomponent/parentcomponent.component';
import { ChildcomponentComponent } from './childcomponent/childcomponent.component';
import { Parent4sharedserviceComponent } from './parent4sharedservice/parent4sharedservice.component';
import { Child4sharedserviceComponent } from './child4sharedservice/child4sharedservice.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ParentcomponentComponent,
    ChildcomponentComponent,
    Parent4sharedserviceComponent,
    Child4sharedserviceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
