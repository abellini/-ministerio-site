import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookswordComponent } from './booksword.component';

describe('BookswordComponent', () => {
  let component: BookswordComponent;
  let fixture: ComponentFixture<BookswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
