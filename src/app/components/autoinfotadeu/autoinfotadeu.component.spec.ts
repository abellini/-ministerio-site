import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoinfotadeuComponent } from './autoinfotadeu.component';

describe('AutoinfotadeuComponent', () => {
  let component: AutoinfotadeuComponent;
  let fixture: ComponentFixture<AutoinfotadeuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoinfotadeuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoinfotadeuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
