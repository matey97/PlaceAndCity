import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from "@angular/fire/compat/firestore";
import { InterestArea } from "../../model/area";
import { Command, CommandStatus, fromInterestArea } from "./command";
import { Subscription } from "rxjs";

const COMMANDS_COLLECTION = "commands";

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore: AngularFirestore) { }

  async createDataExtractionCommandFrom(interestArea: InterestArea): Promise<void> {
    const command = fromInterestArea(interestArea);

    await this.docRef(interestArea.id).set(command);
  }

  listenForCommandStatusChange(interestArea: InterestArea, callback: (status: CommandStatus) => void): Subscription {
    const docObservable = this
      .docRef(interestArea.id)
      .valueChanges()

    return docObservable.subscribe((next) => {
      if (next) callback(next.status)
    });
  }

  private docRef(id: string): AngularFirestoreDocument<Command> {
    return this.firestore.collection<Command>(COMMANDS_COLLECTION).doc(id);
  }
}


