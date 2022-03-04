import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-usage-info',
  templateUrl: './usage-info.component.html',
  styleUrls: ['./usage-info.component.scss']
})
export class UsageInfoComponent {

  @Output() startDrawing = new EventEmitter<void>();

  constructor() { }

  onLetsGoClick() {
    this.startDrawing.emit();
  }
}
