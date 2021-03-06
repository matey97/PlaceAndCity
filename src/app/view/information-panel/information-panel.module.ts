import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsageInfoComponent } from './usage-info/usage-info.component';
import { DrawingInfoComponent } from './drawing-info/drawing-info.component';
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { AreaQuestionsComponent } from './area-questions/area-questions.component';
import { MatStepperModule } from "@angular/material/stepper";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LikertQuestionComponent } from './area-questions/likert-question/likert-question.component';
import { MatRadioModule } from "@angular/material/radio";
import { MatChipsModule } from "@angular/material/chips";
import { MatDividerModule } from "@angular/material/divider";
import { AreaStatusListComponent } from './area-status-list/area-status-list.component';
import { AreaStatusComponent } from './area-status-list/area-status/area-status.component';
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatRippleModule } from "@angular/material/core";
import { TextQuestionComponent } from './area-questions/text-question/text-question.component';
import { FacetsSelectionComponent } from './area-questions/facets-selection/facets-selection.component';
import { MatTreeModule } from "@angular/material/tree";
import { MatCheckboxModule } from "@angular/material/checkbox";



@NgModule({
  declarations: [
    UsageInfoComponent,
    DrawingInfoComponent,
    AreaQuestionsComponent,
    LikertQuestionComponent,
    AreaStatusListComponent,
    AreaStatusComponent,
    TextQuestionComponent,
    FacetsSelectionComponent
  ],
    exports: [
        UsageInfoComponent,
        DrawingInfoComponent,
        AreaQuestionsComponent,
        AreaStatusListComponent
    ],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatChipsModule,
    MatDividerModule,
    MatProgressBarModule,
    MatRippleModule,
    FormsModule,
    MatTreeModule,
    MatCheckboxModule
  ],
})
export class InformationPanelModule { }
