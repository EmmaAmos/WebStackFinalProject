import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DIYdetailComponent } from './main-page/diydetail/diydetail.component';
import { DIYeditComponent } from './main-page/diyedit/diyedit.component';
import { DIYitemComponent } from './main-page/main-diylist/diyitem/diyitem.component';
import { MainDIYListComponent } from './main-page/main-diylist/main-diylist.component';
import { MainPageComponent } from './main-page/main-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/main-page', pathMatch:'full' },
  { path: 'main-page', component: MainPageComponent, children:[ 
    {path: 'newDIY', component: DIYdetailComponent}, {path: 'new', component: DIYeditComponent}, {path: ':id', component: DIYdetailComponent}, {path: ':id/edit', component: DIYeditComponent} 
  ]},

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
