import { Component } from '@angular/core';
import { DIY } from '../diyModel';

@Component({
  selector: 'app-main-diylist',
  templateUrl: './main-diylist.component.html',
  styleUrls: ['./main-diylist.component.css']
})
export class MainDIYListComponent {

  diy: DIY[];

}
