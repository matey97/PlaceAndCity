import { Component, Input } from '@angular/core';
import { InterestArea } from "../../../model/area";
import { CommandStatus } from "../../../services/firestore/command";

@Component({
  selector: 'app-areas-list-finish',
  templateUrl: './areas-list-finish.component.html',
  styleUrls: ['./areas-list-finish.component.scss']
})
export class AreasListFinishComponent {

  @Input() drawnAreas: InterestArea[] = [];
  @Input() commandStatus: Map<string, CommandStatus> = new Map<string, CommandStatus>();

  get allDownloadsReady(): boolean {
    const commands = Array.from(this.commandStatus.values());
    return commands.indexOf(CommandStatus.SUBMITTED) === -1;
  }

  constructor() { }
}
