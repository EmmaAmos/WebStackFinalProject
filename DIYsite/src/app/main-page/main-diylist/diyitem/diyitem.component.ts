import { Component, Input } from '@angular/core';

import { DIY } from '../../diyModel';

@Component({
  selector: 'app-diyitem',
  templateUrl: './diyitem.component.html',
  styleUrls: ['./diyitem.component.css']
})
export class DIYitemComponent {

  @Input() diy: DIY;
  @Input() index: number;

}
