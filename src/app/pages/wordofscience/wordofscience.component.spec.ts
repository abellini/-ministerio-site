import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WordofscienceComponent } from './wordofscience.component';

describe('WordofscienceComponent', () => {
  let component: WordofscienceComponent;
  let fixture: ComponentFixture<WordofscienceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordofscienceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordofscienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
