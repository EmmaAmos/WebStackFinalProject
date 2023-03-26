import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { MainDIYListComponent } from './main-page/main-diylist/main-diylist.component';
import { DIYitemComponent } from './main-page/main-diylist/diyitem/diyitem.component';
import { FormsModule } from '@angular/forms';
import { DIYdetailComponent } from './main-page/diydetail/diydetail.component';
import { DIYeditComponent } from './main-page/diyedit/diyedit.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    MainDIYListComponent,
    DIYitemComponent,
    DIYdetailComponent,
    DIYeditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
