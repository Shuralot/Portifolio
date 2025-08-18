import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Shares } from './shares';

@Injectable({
  providedIn: 'root'
})
export class Sharevice {
  private cachedShares$: Observable<Shares[]> | null = null;

  constructor(private firestore: Firestore) {}

  getShares(): Observable<Shares[]> {
    if (!this.cachedShares$) {
      const sharesCollection = collection(this.firestore, 'projetos');
      this.cachedShares$ = collectionData(sharesCollection, { idField: 'id' }) as Observable<Shares[]>;
    }
    return this.cachedShares$;
  }
}
