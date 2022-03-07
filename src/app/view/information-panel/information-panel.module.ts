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
import { ReactiveFormsModule } from "@angular/forms";
import { LikertQuestionComponent } from './area-questions/likert-question/likert-question.component';
import { MatRadioModule } from "@angular/material/radio";



@NgModule({
  declarations: [
    UsageInfoComponent,
    DrawingInfoComponent,
    AreaQuestionsComponent,
    LikertQuestionComponent
  ],
  exports: [
    UsageInfoComponent,
    DrawingInfoComponent,
    AreaQuestionsComponent
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
    MatRadioModule
  ],
})
export class InformationPanelModule { }
