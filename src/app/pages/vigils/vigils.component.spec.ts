import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VigilsComponent } from './vigils.component';

describe('VigilsComponent', () => {
  let component: VigilsComponent;
  let fixture: ComponentFixture<VigilsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VigilsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VigilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
