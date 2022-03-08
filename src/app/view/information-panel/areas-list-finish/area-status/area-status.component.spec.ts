import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaStatusComponent } from './area-status.component';

describe('AreaStatusComponent', () => {
  let component: AreaStatusComponent;
  let fixture: ComponentFixture<AreaStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreaStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
