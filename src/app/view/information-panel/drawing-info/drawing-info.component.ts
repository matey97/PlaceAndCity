import { Component, EventEmitter, Input, Output } from '@angular/core';
import { InterestArea } from "../../../model/area";

@Component({
  selector: 'app-drawing-info',
  templateUrl: './drawing-info.component.html',
  styleUrls: ['./drawing-info.component.scss']
})
export class DrawingInfoComponent {

  @Input() enableContinue: boolean = false;
  @Input() drawnAreas: InterestArea[] = []

  @Output() areaReady = new EventEmitter<void>();
  @Output() finishDrawing = new EventEmitter<void>();

  constructor() { }

  onAreaReady() {
    this.areaReady.emit()
  }

  onFinishDrawing() {
    this.finishDrawing.emit();
  }
}
