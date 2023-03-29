import { Injectable } from '@angular/core';
import { catchError, map, Observable, Subject, tap, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { DIY } from './diyModel';

@Injectable({
  providedIn: 'root'
})
export class DIYserviceService {

  diySelected = new Subject<DIY>();

  diyChanged = new Subject<DIY[]>();

  diyChangedEvent = new Subject<DIY[]>();

  diyListChangedEvent  = new Subject<DIY[]>();

  startedEditing = new Subject<number>();

  maxDIYId!: number;

  private diy: DIY[] =[
    new DIY ('1','Lego Headwig', '../../assets/images/LegoHeadWig.webp', 'https://www.lego.com/en-us/product/hedwig-pencil-holder-41809'),
    new DIY ('2','Lego Hedgehog', '../../assets/images/LegoHedgeHogBlue.webp', 'https://www.lego.com/en-us/product/creative-animal-drawer-41805'),
  ];
  
  /*
  getDIYs(): Observable<DIY[]>{
    return this.http.get<DIY[]>('http://localhost:3000/diy')
      .pipe(
        tap((diy: DIY[]) => {
          this.diy = diy.map(diy => new DIY(
            diy.id,
            diy.name,
            diy.externalSiteURL,
            diy.imageUrl,            
          ));
          console.log(this.diy);
          this.maxDIYId = this.getMaxId();
          this.sortAndSend();
        }),
        catchError(error => {
          console.error(error);
          return throwError(error);
        })
      );
  }
  */
  getDIYs(): Observable<DIY[]> {
    return this.http.get<DIY[]>('http://localhost:27017/diy').pipe(
      map((diy: DIY[]) => {
        return diy.map(d => new DIY(d.id, d.name, d.externalSiteURL, d.imageUrl));
      }),
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }

  getDIY(id: string) : DIY {
    for (let diy of this.diy) {
      if(diy.id == id) {
         return diy;
      }
    }
    return null!;
  }

  getSingleDIY(id: number){
    return this.diy[id];
  }

  addDIY(diy: DIY) {
    if (!diy) {
      return;
    }

    diy.id = '';

    const headers = new HttpHeaders({'Content-Type': 'application/json'});

    // add to database
    this.http.post<{ message: string, diy: DIY }>('http://localhost:27017/diy',
    diy,
      { headers: headers })
      .subscribe(
        (responseData) => {
          // add new document to documents
          this.diy.push(responseData.diy);
          this.sortAndSend();
        }
      );
  }

 
  updateDIY(originalDIY: DIY, newDIY: DIY) {
    if (!originalDIY || !newDIY) {
      return;
    }

    const pos = this.diy.findIndex(d => d.id === originalDIY.id);

    if (pos < 0) {
      return;
    }

    // set the id of the new Document to the id of the old Document
    newDIY.id = originalDIY.id;
    //newDIY._id = originalDIY._id;

    const headers = new HttpHeaders({'Content-Type': 'application/json'});

    // update database
    this.http.put('http://localhost:27017/diy/' + originalDIY.id,
    newDIY, { headers: headers })
      .subscribe(
        (response: any) => {
          this.diy[pos] = newDIY;
          this.sortAndSend();
        }
      );
  }

deleteDIY(diy: DIY) {

  if (!diy) {
    return;
  }

  const pos = this.diy.findIndex(d => d.id === diy.id);

  if (pos < 0) {
    return;
  }

  // delete from database
  this.http.delete('http://localhost:27017/diy/' + diy.id)
    .subscribe(
      (response: any) => {
        this.diy.splice(pos, 1);
        this.sortAndSend();
      }
    );
}

  getMaxId(): number {
    let maxId = 0;
    for (let diy of this.diy) {
        let currentId = parseInt(diy.id);
        if (currentId > maxId) {
        maxId = currentId;
        }
    }
    return maxId;
  }

  sortAndSend(){
    this.diy.sort((a,b)=>{
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
    this.diyListChangedEvent.next(this.diy.slice())
  }

  constructor(private http: HttpClient){
    this.maxDIYId = this.getMaxId();
  }


}
