import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorResponderComponent } from './por-responder.component';

describe('PorResponderComponent', () => {
  let component: PorResponderComponent;
  let fixture: ComponentFixture<PorResponderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PorResponderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PorResponderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
