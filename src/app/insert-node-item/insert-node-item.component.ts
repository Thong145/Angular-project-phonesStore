import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NodeItem } from '../models/item';
import { ItemService } from '../Services/item.service';

@Component({
  selector: 'app-insert-node-item',
  templateUrl: './insert-node-item.component.html',
  styleUrls: ['./insert-node-item.component.css']
})
export class InsertNodeItemComponent implements OnInit {
  insertFrm:FormGroup;

  constructor(private fb: FormBuilder, private itemsry: ItemService) {
    this.insertFrm = this.fb.group({
      id:['',[Validators.required,Validators.minLength(1)]], 
      name:['',[Validators.required, Validators.minLength(3)]],
      Description:['',[Validators.required, Validators.minLength(3)]],
      amount:['',[Validators.required]],
      date:['',[Validators.required]],
      company:['',[Validators.required]],
      /*
      password:['', Validators.required],
      confirmpassword:['', Validators.required]
      },{
      validator: MustMatch('password', 'confirmpassword')}//hàm tự viết SV có thể bỏ qua không kiểm tra cũng được
      */
    });
   }

   onSubmit(){	
    let item = new NodeItem();
    item.id = this.insertFrm.controls["id"].value;
    item.name = this.insertFrm.controls["name"].value;
    item.Description = this.insertFrm.controls["Description"].value;
    item.amount=this.insertFrm.controls["amount"].value;
    item.date=this.insertFrm.controls["date"].value;
    item.company=this.insertFrm.controls["company"].value;
    this.itemsry.insertItem(item).subscribe(data=>{console.log(data)});

    
    // if (this.insertFrm.invalid)
    // {
    //   return;
    // }	
  }
  ngOnInit(): void {
  }

}
