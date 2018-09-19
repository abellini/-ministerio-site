import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LevantekidsComponent } from './levantekids.component';

describe('LevantekidsComponent', () => {
  let component: LevantekidsComponent;
  let fixture: ComponentFixture<LevantekidsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LevantekidsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LevantekidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
