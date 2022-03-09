import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaStatusListComponent } from './area-status-list.component';

describe('AreasListFinishComponent', () => {
  let component: AreaStatusListComponent;
  let fixture: ComponentFixture<AreaStatusListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreaStatusListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaStatusListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
