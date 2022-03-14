import { Component, EventEmitter, Input, Output } from '@angular/core';
import { InterestArea } from "../../interest-area";
import { MatChip } from "@angular/material/chips";

@Component({
  selector: 'app-drawing-info',
  templateUrl: './drawing-info.component.html',
  styleUrls: ['./drawing-info.component.scss']
})
export class DrawingInfoComponent {

  @Input() enableContinue: boolean = false;
  @Input() drawnAreas: InterestArea[] = []

  @Output() areaReady = new EventEmitter<void>();
  @Output() areaSelected = new EventEmitter<InterestArea>();
  @Output() finishDrawing = new EventEmitter<void>();

  constructor() { }

  onAreaReady() {
    this.areaReady.emit()
  }

  onFinishDrawing() {
    this.finishDrawing.emit();
  }

  onAreaToggleSelected(chip: MatChip, area: InterestArea) {
    chip.toggleSelected();
    this.areaSelected.emit(chip.selected ? area : undefined);
  }
}
