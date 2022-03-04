import { Component } from '@angular/core';
import { Area, AreaChange, Change } from "../model/area";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Place and City';

  areas: Map<number, Area> = new Map<number, Area>()

  constructor(
  ) {
  }

  onAreaChange(areaChange: AreaChange) {
    const area = areaChange.area
    switch (areaChange.change) {
      case Change.ADD:
        this.areas.set(area.id, area)
        break
      case Change.MODIFY:
        this.areas.set(area.id, area)
        break
      case Change.DELETE:
        this.areas.delete(area.id)
    }
  }
}
