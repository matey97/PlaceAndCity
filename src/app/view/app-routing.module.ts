import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AreaInformationComponent } from "../area/area-information/area-information.component";
import { InformationPanelComponent } from "./information-panel/information-panel.component";

const routes: Routes = [
  {
    path: "",
    component: InformationPanelComponent
  },
  {
    path: ":areaId",
    component: AreaInformationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
