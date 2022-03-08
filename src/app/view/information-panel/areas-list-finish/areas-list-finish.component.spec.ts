import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreasListFinishComponent } from './areas-list-finish.component';

describe('AreasListFinishComponent', () => {
  let component: AreasListFinishComponent;
  let fixture: ComponentFixture<AreasListFinishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreasListFinishComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AreasListFinishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
