import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LevanteplenoComponent } from './levantepleno.component';

describe('LevanteplenoComponent', () => {
  let component: LevanteplenoComponent;
  let fixture: ComponentFixture<LevanteplenoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LevanteplenoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LevanteplenoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
