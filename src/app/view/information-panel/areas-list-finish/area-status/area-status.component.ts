import { Component, Input } from '@angular/core';
import { InterestArea } from "../../../../model/area";
import { CommandStatus } from "../../../../services/firestore/command";

@Component({
  selector: 'app-area-status',
  templateUrl: './area-status.component.html',
  styleUrls: ['./area-status.component.scss']
})
export class AreaStatusComponent {

  @Input() area!: InterestArea;
  @Input() status: CommandStatus | undefined;

  constructor() { }

}
