import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoelaboraComponent } from './voelabora.component';

describe('VoelaboraComponent', () => {
  let component: VoelaboraComponent;
  let fixture: ComponentFixture<VoelaboraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoelaboraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoelaboraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
