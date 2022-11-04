import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RespondidoComponent } from './respondido.component';

describe('RespondidoComponent', () => {
  let component: RespondidoComponent;
  let fixture: ComponentFixture<RespondidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RespondidoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RespondidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
