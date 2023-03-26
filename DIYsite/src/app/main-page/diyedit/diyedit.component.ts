import { Component } from '@angular/core';
import { WindServiceService } from 'src/app/wind-service.service';
import { DIY } from '../diyModel';
import { DIYserviceService } from '../diyservice.service';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-diyedit',
  templateUrl: './diyedit.component.html',
  styleUrls: ['./diyedit.component.css']
})
export class DIYeditComponent {

  diy: DIY;
  id: number;
  nativeWindow: any;

  constructor( private diyService: DIYserviceService, private windowService: WindServiceService ,private route: ActivatedRoute, private router: Router) {
    this.nativeWindow = windowService.getNativeWindow();
  }

  ngOnInit() {
      this.route.params
        .subscribe(
          (params: Params) => {
            this.id = +params['id'];
            console.log('the single id '+ this.id)
            this.diy = this.diyService.getSingleDIY(this.id);
            console.log('this document from Single '+ this.diy.id)
          }
        );
  }

  onEditDIY() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onView() {
    if (this.diy.externalSiteURL) {
      this.nativeWindow.open(this.diy.externalSiteURL);
    }
  }

  onDelete() {
    this.diyService.deleteDIY(this.diy);
    this.router.navigate(['main-page'], {relativeTo: this.route})
 }


}
