import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DIYeditComponent } from './diyedit.component';

describe('DIYeditComponent', () => {
  let component: DIYeditComponent;
  let fixture: ComponentFixture<DIYeditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DIYeditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DIYeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
