import { Component, OnInit } from '@angular/core';
import { DIY } from '../diyModel';
import { ActivatedRoute, Router } from '@angular/router';
import { DIYserviceService } from '../diyservice.service';

@Component({
  selector: 'app-main-diylist',
  templateUrl: './main-diylist.component.html',
  styleUrls: ['./main-diylist.component.css']
})
export class MainDIYListComponent implements OnInit{

  diy: DIY[];
  editMode: boolean = false;
  term!: string

  constructor(private diyService: DIYserviceService, private router: Router, private route: ActivatedRoute){

  }


  ngOnInit() {

    this.diyService.getDIYs().subscribe(
      (diy: DIY[]) => {
        this.diy = diy;
      },
      (error: any) => {
        console.error('Error fetching DIY: ', error);
      }
    );
  }

    onNewDIY() {
      this.router.navigate(['newDIY'], {relativeTo: this.route});
      this.editMode = true;
      console.log('this is the state of this edit mode'+ this.editMode)
    }
  
    search(value: string) {
      this.term = value;
    }

}
