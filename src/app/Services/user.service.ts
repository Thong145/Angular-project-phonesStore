import { Injectable } from '@angular/core';
import {map, Observable} from 'rxjs'; 
import firebase from 'firebase/compat/app';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Item} from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  itemsCollection!: AngularFirestoreCollection<Item>;
  items!: Observable<Item[]>;

  constructor(public afs: AngularFirestore, private auth: AngularFireAuth) {
    // this.itemsCollection = this.afs.collection('items1')
    // this.items = this.itemsCollection.snapshotChanges().pipe(map((changes: any[]) => {
    //   return changes.map(a => {
    //     const data = a.payload.doc.data() as Item;
    //     data.id = a.payload.doc.id;
    //     return data;
    //   })
    // }))

   }

  getCurrentUser(){
    return new Promise<any>((resolve, reject) => {
      this.auth.onAuthStateChanged(function(user){
      if (user) {
        resolve(user);
      } else {				 
        reject('No user logged in');
      }
      })
  })
  }

  getItem(): Observable<Item[]> {
    return this.items;

  }

  deleteItem(items: Item){
    this.itemsCollection.doc(items.id).delete();
  }
  
  updateItem(items: Item){
    this.itemsCollection.doc(items.id).update(items);
  }
}
