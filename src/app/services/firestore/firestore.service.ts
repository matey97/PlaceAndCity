import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { InterestArea } from "../../model/area";
import { Command, CommandStatus, fromInterestArea } from "./command";
import { Subscription } from "rxjs";

const COMMANDS_COLLECTION = "commands";

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore: AngularFirestore) { }

  async createDataExtractionCommandFrom(interestArea: InterestArea): Promise<string> {
    const command = fromInterestArea(interestArea);

    const result = await this.firestore.collection(COMMANDS_COLLECTION).add(command);
    return result.id;
  }

  listenForCommandStatusChange(commandId: string, callback: (status: CommandStatus) => void): Subscription {
    const docObservable = this.firestore
      .collection<Command>(COMMANDS_COLLECTION)
      .doc(commandId)
      .valueChanges()

    return docObservable.subscribe((next) => {
      if (next) callback(next.status)
    });
  }
}


