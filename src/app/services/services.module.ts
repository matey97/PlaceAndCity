import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireModule } from "@angular/fire/compat";
import { environment } from "../../environments/environment";
import { AngularFirestoreModule } from "@angular/fire/compat/firestore";
import { CommonComponentsModule } from "../common/common-components.module";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    CommonComponentsModule
  ]
})
export class ServicesModule { }
