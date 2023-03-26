import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { MainDIYListComponent } from './main-page/main-diylist/main-diylist.component';
import { DIYitemComponent } from './main-page/main-diylist/diyitem/diyitem.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    MainDIYListComponent,
    DIYitemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
