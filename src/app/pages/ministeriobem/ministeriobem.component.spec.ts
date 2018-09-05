import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinisteriobemComponent } from './ministeriobem.component';

describe('MinisteriobemComponent', () => {
  let component: MinisteriobemComponent;
  let fixture: ComponentFixture<MinisteriobemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinisteriobemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinisteriobemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
