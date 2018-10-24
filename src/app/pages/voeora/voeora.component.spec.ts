import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoeoraComponent } from './voeora.component';

describe('VoeoraComponent', () => {
  let component: VoeoraComponent;
  let fixture: ComponentFixture<VoeoraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoeoraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoeoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
