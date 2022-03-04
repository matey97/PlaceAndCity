import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsageInfoComponent } from './usage-info/usage-info.component';



@NgModule({
  declarations: [
    UsageInfoComponent
  ],
  exports: [
    UsageInfoComponent
  ],
  imports: [
    CommonModule
  ],
})
export class InformationPanelModule { }
