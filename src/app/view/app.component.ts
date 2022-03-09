import { Component} from '@angular/core';
import { AreaAnswers, AreaChange, buildInterestArea, Change, DrawnArea, InterestArea } from "../model/area";
import { FirestoreService} from "../services/firestore/firestore.service";
import { CommandStatus } from "../services/firestore/command";

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
  focusedArea!: InterestArea;

  commandStatus: Map<string, CommandStatus> = new Map<string, CommandStatus>();

  constructor(
    private firestoreService: FirestoreService
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
    const interestArea = buildInterestArea(this.currentArea, answers);
    this.interestAreas = this.interestAreas.concat(interestArea);

    this.firestoreService.createDataExtractionCommandFrom(interestArea)
      .then(() => {
        const subscription = this.firestoreService
          .listenForCommandStatusChange(interestArea, (commandStatus) => {
            this.commandStatus = this.commandStatus.set(interestArea.id, commandStatus);

            if (commandStatus == CommandStatus.COMPLETED) {
              subscription.unsubscribe();
            }
          });
      });

    this.onStartDrawing();
  }

  onDrawingFinished() {
    this.mapDrawEnabled = false;
    this.currentStatus = Status.FINISH;
  }

  onAreaSelected(area: InterestArea) {
    this.focusedArea = area;
  }
}

export enum Status {
  APP_INFO,
  DRAW_INFO,
  AREA_QUESTIONS,
  FINISH
}
