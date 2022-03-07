import { Component } from '@angular/core';
import { Area, AreaChange, Change } from "../model/area";
import { AreaAnswers } from "./information-panel/area-questions/area-questions.component";

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

  areas: Map<number, Area> = new Map<number, Area>();

  constructor(
  ) {
  }

  onAreaChange(areaChange: AreaChange) {
    const area = areaChange.area;
    switch (areaChange.change) {
      case Change.ADD:
      case Change.MODIFY:
        this.areas.set(area.id, area);
        this.areaDrawn = true;
        break;
      case Change.DELETE:
        this.areas.delete(area.id);
        this.areaDrawn = false;
    }
  }

  onStartDrawing() {
    this.mapDrawEnabled = true;
    this.currentStatus = Status.DRAW_INFO;
  }

  startAreaQuestions() {
    this.mapDrawEnabled = false;
    this.currentStatus = Status.AREA_QUESTIONS;
  }

  onAreaAnswers(answers: AreaAnswers) {
    console.log(answers);
  }
}

export enum Status {
  APP_INFO,
  DRAW_INFO,
  AREA_QUESTIONS
}
