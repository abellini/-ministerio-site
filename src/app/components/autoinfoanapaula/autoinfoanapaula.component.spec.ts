import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoinfoanapaulaComponent } from './autoinfoanapaula.component';

describe('AutoinfoanapaulaComponent', () => {
  let component: AutoinfoanapaulaComponent;
  let fixture: ComponentFixture<AutoinfoanapaulaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoinfoanapaulaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoinfoanapaulaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
