import { Injectable } from '@angular/core';
import { catchError, Observable, Subject, tap, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DIY } from './diyModel';

@Injectable({
  providedIn: 'root'
})
export class DIYserviceService {


  contactSelected = new Subject<DIY>();

  contactChanged = new Subject<DIY[]>();

  contactChangedEvent = new Subject<DIY[]>();

  contactsListChangedEvent  = new Subject<DIY[]>();

  startedEditing = new Subject<number>();

  maxContactId!: number;

  private contacts: DIY[] =[
    new DIY ('1','Lego Headwig', '../../assets/images/LegoHeadWig.webp', 'https://www.lego.com/en-us/product/hedwig-pencil-holder-41809'),
    new DIY ('2','Lego Headwig', '../../assets/images/LegoHedgeHogBlue.webp', 'https://www.lego.com/en-us/product/creative-animal-drawer-41805'),
  ];
  
  getDIY(): Observable<DIY[]>{
    //return this.contacts.slice();
    return this.http.get<DIY[]>('http://localhost:3000/contacts')
      .pipe(
        tap((contacts: DIY[]) => {
          this.contacts = contacts;
          console.log(contacts)
          this.maxContactId = this.getMaxId();
          this.contacts.sort((a, b) => a.name.localeCompare(b.name));
          this.contactsListChangedEvent.next(this.contacts.slice());
        }),
        catchError(error => {
          console.error(error);
          return throwError(error);
        })
      );
  }

  getDIYs(id: string) : DIY {
    for (let contact of this.contacts) {
      if(contact.id == id) {
         return contact;
      }
    }
    return null!;
  }

  getSingleDIY(id: number){
    return this.diy[id];
  }

  addDIY(contacts: DIY) {
    if (!contacts) {
      return;
    }

    diy.id = '';

    const headers = new HttpHeaders({'Content-Type': 'application/json'});

    // add to database
    this.http.post<{ message: string, contacts: DIY }>('http://localhost:3000/contacts',
    contacts,
      { headers: headers })
      .subscribe(
        (responseData) => {
          // add new document to documents
          this.contacts.push(responseData.contacts);
          this.sortAndSend();
        }
      );
  }

 
  updateContact(originalContact: Contact, newContact: Contact) {
    if (!originalContact || !newContact) {
      return;
    }

    const pos = this.contacts.findIndex(d => d.id === originalContact.id);

    if (pos < 0) {
      return;
    }

    // set the id of the new Document to the id of the old Document
    newContact.id = originalContact.id;
    newContact._id = originalContact._id;

    const headers = new HttpHeaders({'Content-Type': 'application/json'});

    // update database
    this.http.put('http://localhost:3000/contacts/' + originalContact.id,
    newContact, { headers: headers })
      .subscribe(
        (response: any) => {
          this.contacts[pos] = newContact;
          this.sortAndSend();
        }
      );
  }

deleteDIY(contacts: DIY) {

  if (!contacts) {
    return;
  }

  const pos = this.contacts.findIndex(d => d.id === contacts.id);

  if (pos < 0) {
    return;
  }

  // delete from database
  this.http.delete('http://localhost:3000/contacts/' + contacts.id)
    .subscribe(
      (response: any) => {
        this.contacts.splice(pos, 1);
        this.sortAndSend();
      }
    );
}

  getMaxId(): number {
    let maxId = 0;
    for (let contact of this.contacts) {
        let currentId = parseInt(contact.id);
        if (currentId > maxId) {
        maxId = currentId;
        }
    }
    return maxId;
  }

  sortAndSend(){
    this.contacts.sort((a,b)=>{
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
    this.contactsListChangedEvent.next(this.contacts.slice())
  }

  constructor(private http: HttpClient){
    this.maxContactId = this.getMaxId();
  }


}
