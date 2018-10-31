import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChristmasprayerComponent } from './christmasprayer.component';

describe('ChristmasprayerComponent', () => {
  let component: ChristmasprayerComponent;
  let fixture: ComponentFixture<ChristmasprayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChristmasprayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChristmasprayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
