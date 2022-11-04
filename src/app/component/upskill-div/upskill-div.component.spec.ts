import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpskillDivComponent } from './upskill-div.component';

describe('UpskillDivComponent', () => {
  let component: UpskillDivComponent;
  let fixture: ComponentFixture<UpskillDivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpskillDivComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpskillDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
