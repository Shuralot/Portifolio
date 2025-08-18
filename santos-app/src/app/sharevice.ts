import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Shares } from './shares'; 

@Injectable({
  providedIn: 'root'
})
export class Sharevice {


  constructor(private firestore: Firestore) {}

  getShares(): Observable<Shares[]> {

    const sharesCollection = collection(this.firestore, 'projetos');

    return collectionData(sharesCollection, { idField: 'id' }) as Observable<Shares[]>;
  }
}