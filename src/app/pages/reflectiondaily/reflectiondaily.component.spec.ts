import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReflectiondailyComponent } from './reflectiondaily.component';

describe('ReflectiondailyComponent', () => {
  let component: ReflectiondailyComponent;
  let fixture: ComponentFixture<ReflectiondailyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReflectiondailyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReflectiondailyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
