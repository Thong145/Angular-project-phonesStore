import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Angular-app';
  // private itemsCollection: AngularFirestoreCollection<Item>;
  // //items: Observable<Item[]>;
  // items1:Item[]=[];
  // title = 'Angular-app';
  // constructor(private readonly afs: AngularFirestore){
  //   this.itemsCollection = this.afs.collection<Item>('items');
	// 		//this.items = this.itemsCollection.valueChanges();
			
	// 		// .valueChanges() is simple. It just returns the 
	// 		// JSON data without metadata. If you need the 
	// 		// doc.id() in the value you must persist it your self
	// 		// or use .snapshotChanges() instead. Only using for versions 7 and earlier
					
	// 	  this.itemsCollection.valueChanges( { idField: 'idField' }).subscribe(data=>{this.items1 =data;console.log(this.items1)});
			
	// 		//this.items = this.itemsCollection.valueChanges( { idField: 'id1' }); //chỉ sử dụng cho Angular 8,9
	// 		//id1: ten field đại diện cho documnent id, lưu ý không 
	// 		//được đặt trùng với tên field khai báo trong dữ liệu

  // }
  
  ngOnInit(): void {
 
  }


}
