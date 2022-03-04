import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-drawing-info',
  templateUrl: './drawing-info.component.html',
  styleUrls: ['./drawing-info.component.scss']
})
export class DrawingInfoComponent {

  @Input() enableContinue: boolean = false;
  @Output() areaReady = new EventEmitter<void>();

  constructor() { }

  onAreaReady() {
    this.areaReady.emit()
  }
}
