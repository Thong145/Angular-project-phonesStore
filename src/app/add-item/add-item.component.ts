import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Item} from '../models/item';
import { ItemService } from '../Services/item.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  private itemCollection!: AngularFirestoreCollection<Item>;
  items1: Item[] = []
  marked = false;
  theCheckbox = 'hello';
  isChecked: any;

  constructor(private readonly afs: AngularFirestore, 
    private fb: FormBuilder, 
    private itemSrv: ItemService,
    private router: Router, ) 
    {
      this.itemCollection = afs.collection<Item>('items1');
    }

    formaddItem!: FormGroup;

  ngOnInit(): void {
    this.formaddItem = new FormGroup({
      id: new FormControl('',[Validators.required]),
      name: new FormControl('',[Validators.required]),
      price: new FormControl('',[Validators.required]),
      Description: new FormControl(),
      amount: new FormControl('',[Validators.required]),
      date: new FormControl('',[Validators.required]),
      company: new FormControl(),
    });
  }

  add(data: {
    id: string;
    name: string;
    Description: string;
    price: string;
    amount: number;
    date: string;
    company: string;
  }) 
  {
    let detail: Item ={};

    detail.id = data.id
    detail.name = data.name
    detail.price = data.price
    detail.Description = data.Description
    detail.amount = data.amount
    detail.date = data.date
    detail.company = data.company

    console.log(detail);
    if (data.name === null || data.id === null
      || data.price === null || data.date === null || data.company === null
     ) {
      alert('Failed to adding new book! Please check again!!!!');
    }
    else {
      this.itemCollection.add(data); //adding  auto-generate "document id" 
      alert('Add Success !!!');
      this.router.navigate(["/admin"]);
    }
  }


  back(){
    this.router.navigate(["/admin"]);
  }

  myFunction(event:any){
    console.log(event.target.defaultValue);
  
  }
  toggleVisibility(event:any){
    
  }
  click(event:any){
 }

}
