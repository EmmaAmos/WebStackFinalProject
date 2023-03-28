import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherCraftsComponent } from './other-crafts.component';

describe('OtherCraftsComponent', () => {
  let component: OtherCraftsComponent;
  let fixture: ComponentFixture<OtherCraftsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherCraftsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtherCraftsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
