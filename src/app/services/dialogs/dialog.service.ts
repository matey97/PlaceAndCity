import { Injectable } from '@angular/core';
import { ServicesModule } from "../services.module";
import { MatDialog } from "@angular/material/dialog";
import {
  InformationDialogComponent,
  InformationDialogData
} from "../../common/dialogs/information-dialog/information-dialog.component";

@Injectable({
  providedIn: ServicesModule
})
export class DialogService {

  constructor(private materialDialogService: MatDialog) { }

  showInformationDialog(data: InformationDialogData): void {
    this.materialDialogService.open(InformationDialogComponent, {
      data: data
    });
  }
}
