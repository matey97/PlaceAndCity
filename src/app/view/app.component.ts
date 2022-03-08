import { Component } from '@angular/core';
import { DrawnArea, AreaChange, Change, InterestArea, AreaAnswers } from "../model/area";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Place and City';

  mapDrawEnabled: boolean = false;
  areaDrawn: boolean = false;

  status: typeof Status = Status;
  currentStatus: Status = Status.APP_INFO;

  currentArea!: DrawnArea;
  interestAreas: InterestArea[] = []

  constructor(
  ) {
  }

  onAreaChange(areaChange: AreaChange) {
    const area = areaChange.area;
    switch (areaChange.change) {
      case Change.ADD:
      case Change.MODIFY:
        this.currentArea = area;
        this.areaDrawn = true;
        break;
      case Change.DELETE:
        this.areaDrawn = false;
    }
  }

  onStartDrawing() {
    this.mapDrawEnabled = true;
    this.areaDrawn = false;
    this.currentStatus = Status.DRAW_INFO;
  }

  startAreaQuestions() {
    this.mapDrawEnabled = false;
    this.currentStatus = Status.AREA_QUESTIONS;
  }

  onAreaAnswers(answers: AreaAnswers) {
    this.currentArea.name = answers.name;
    this.areas = this.areas.concat(this.currentArea);
    this.onStartDrawing();
  }
}

export enum Status {
  APP_INFO,
  DRAW_INFO,
  AREA_QUESTIONS
}
