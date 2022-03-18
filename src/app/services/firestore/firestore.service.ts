import { Injectable } from '@angular/core';
import { ServicesModule } from "../services.module";
import { AngularFirestore, AngularFirestoreDocument } from "@angular/fire/compat/firestore";
import { InterestArea } from "../../view/interest-area";
import { Command, CommandStatus, fromInterestArea } from "./command";
import { Subscription } from "rxjs";
import { createUserAreaFrom, UserArea } from "./user-area";

const COMMANDS_COLLECTION = "commands";
const USER_AREAS_COLLECTION = "user-areas";

@Injectable({
  providedIn: ServicesModule
})
export class FirestoreService {

  constructor(private firestore: AngularFirestore) { }

  async uploadInterestArea(interestArea: InterestArea): Promise<void> {
    const userArea = createUserAreaFrom(interestArea);
    console.log(userArea);
    await this.docRef<UserArea>(USER_AREAS_COLLECTION, interestArea.id).set(userArea);
  }

  async createDataExtractionCommandFrom(interestArea: InterestArea): Promise<void> {
    const command = fromInterestArea(interestArea);

    await this.docRef<Command>(COMMANDS_COLLECTION, interestArea.id).set(command);
  }

  listenForCommandStatusChange(interestArea: InterestArea, callback: (status: CommandStatus) => void): Subscription {
    const docObservable = this
      .docRef<Command>(COMMANDS_COLLECTION, interestArea.id)
      .valueChanges()

    return docObservable.subscribe((next) => {
      if (next) callback(next.status)
    });
  }

  private docRef<T>(collection: string, id: string): AngularFirestoreDocument<T> {
    return this.firestore.collection<T>(collection).doc(id);
  }
}


