import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrayrosaryComponent } from './prayrosary.component';

describe('PrayrosaryComponent', () => {
  let component: PrayrosaryComponent;
  let fixture: ComponentFixture<PrayrosaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrayrosaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrayrosaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
