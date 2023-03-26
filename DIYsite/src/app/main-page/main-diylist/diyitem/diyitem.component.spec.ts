import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DIYitemComponent } from './diyitem.component';

describe('DIYitemComponent', () => {
  let component: DIYitemComponent;
  let fixture: ComponentFixture<DIYitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DIYitemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DIYitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
