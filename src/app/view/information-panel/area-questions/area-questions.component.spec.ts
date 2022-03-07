import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaQuestionsComponent } from './area-questions.component';

describe('AreaQuestionsComponent', () => {
  let component: AreaQuestionsComponent;
  let fixture: ComponentFixture<AreaQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreaQuestionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
