import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoinfoanamariaComponent } from './autoinfoanamaria.component';

describe('AutoinfoanamariaComponent', () => {
  let component: AutoinfoanamariaComponent;
  let fixture: ComponentFixture<AutoinfoanamariaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoinfoanamariaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoinfoanamariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
