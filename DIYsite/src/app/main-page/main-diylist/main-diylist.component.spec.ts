import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainDIYListComponent } from './main-diylist.component';

describe('MainDIYListComponent', () => {
  let component: MainDIYListComponent;
  let fixture: ComponentFixture<MainDIYListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainDIYListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainDIYListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
