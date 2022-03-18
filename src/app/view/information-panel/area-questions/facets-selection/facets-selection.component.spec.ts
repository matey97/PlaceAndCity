import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacetsSelectionComponent } from './facets-selection.component';

describe('FacetsSelectionComponent', () => {
  let component: FacetsSelectionComponent;
  let fixture: ComponentFixture<FacetsSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacetsSelectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacetsSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
