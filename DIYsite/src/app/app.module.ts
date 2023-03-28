import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { MainDIYListComponent } from './main-page/main-diylist/main-diylist.component';
import { DIYitemComponent } from './main-page/main-diylist/diyitem/diyitem.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DIYdetailComponent } from './main-page/diydetail/diydetail.component';
import { DIYeditComponent } from './main-page/diyedit/diyedit.component';
import { HttpClientModule } from '@angular/common/http';
import { SerchPipPipe } from './main-page/serch-pip.pipe';
import { HeaderComponent } from './header/header.component';
import { OtherCraftsComponent } from './other-crafts/other-crafts.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    MainDIYListComponent,
    DIYitemComponent,
    DIYdetailComponent,
    DIYeditComponent,
    SerchPipPipe,
    HeaderComponent,
    OtherCraftsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
