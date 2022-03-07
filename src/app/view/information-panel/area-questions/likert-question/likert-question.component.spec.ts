import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikertQuestionComponent } from './likert-question.component';

describe('LikertQuestionComponent', () => {
  let component: LikertQuestionComponent;
  let fixture: ComponentFixture<LikertQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LikertQuestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LikertQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
