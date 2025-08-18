import { Injectable, inject } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Shares } from './shares';

@Injectable({
  providedIn: 'root'
})
export class Sharevice {

  // Use inject() aqui, não no construtor
  private firestore = inject(Firestore);

  getShares(): Observable<Shares[]> {
    // collectionData deve ser chamado usando a instância injetada dentro de um método
    const sharesCollection = collection(this.firestore, 'projetos');
    return collectionData(sharesCollection, { idField: 'id' }) as Observable<Shares[]>;
  }
}
