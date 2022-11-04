import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SemRespostaComponent } from './sem-resposta.component';

describe('ButtomComponent', () => {
  let component: SemRespostaComponent;
  let fixture: ComponentFixture<SemRespostaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SemRespostaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SemRespostaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
