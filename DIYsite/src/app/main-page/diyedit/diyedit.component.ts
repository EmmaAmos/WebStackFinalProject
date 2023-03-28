import { Component } from '@angular/core';
import { WindServiceService } from 'src/app/wind-service.service';
import { DIY } from '../diyModel';
import { DIYserviceService } from '../diyservice.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-diyedit',
  templateUrl: './diyedit.component.html',
  styleUrls: ['./diyedit.component.css']
})
export class DIYeditComponent {

  index: number;
  originalDIY: DIY;
  diy: DIY;
  groupDIY: DIY[] = [];
  editMode: boolean = false;
  id: string;

  constructor(
    private diyService: DIYserviceService, 
    private route: ActivatedRoute, 
    private router: Router) {

  }

  isInvalidDIY(newDIY: DIY) {
    if (!newDIY) {
      return true;
    }
    if (this.diy && newDIY.id === this.diy.id) {
      console.log('this '+newDIY+ ' = '+this.diy.id)
       return true;
    }
    return false;
  }

  addToGroup($event: any) {
    const selectedDIY: DIY = $event.dragData;
    console.log('drag event is working'+ selectedDIY.id);
    const invalidGroupDIY = this.isInvalidDIY(selectedDIY);    
    if (invalidGroupDIY){
      console.log('the editMode is '+ this.editMode +' in addToGroup')
      return;
    }
    this.groupDIY.push(selectedDIY);
    console.log('operation addToGroup worked '+ selectedDIY.id)
  }

  onRemoveItem(){
    if (this.index < 0 || this.index >= this.groupDIY.length) {
      return;
   }
   this.groupDIY.splice(this.index, 1);
  }

  onCancel(){
    this.router.navigate(['/main-page'], {relativeTo: this.route});
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newDIY = new DIY(value.id, value.name, value.imageUrl, value.externalSiteURL);
    newDIY.id = value.id;
    newDIY.name = value.name;
    newDIY.imageUrl = value.imageUrl;
    newDIY.externalSiteURL = value.externalSiteURL;

    if (this.editMode === true) {
      console.log('this is the state of this edit mode'+ this.editMode +' in onSubmit')
      this.diyService.updateDIY(this.originalDIY, newDIY);
      console.log('Update Succsess')
    } else {
      this.diyService.addDIY(newDIY);
      console.log('Addition Succsess')
    }
    this.router.navigate(['/main-page']);
  }


  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        const id = +params['id'];
        if (id === undefined || id === null) {
          this.editMode = false;
          console.log('the editMode is '+ this.editMode +' in ngOnInit for if 1')
          return;
        }
        
        const originalDIY = this.diyService.getSingleDIY(id);
        if (originalDIY === undefined || this.originalDIY === null) {
          console.log('the editMode is '+ this.editMode +' in ngOnInit for if 2')
          return;
        }
        this.editMode = true;
        this.diy = { ...this.originalDIY };
      }
    );
  }

}
