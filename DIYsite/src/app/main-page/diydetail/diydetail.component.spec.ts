import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DIYdetailComponent } from './diydetail.component';

describe('DIYdetailComponent', () => {
  let component: DIYdetailComponent;
  let fixture: ComponentFixture<DIYdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DIYdetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DIYdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
