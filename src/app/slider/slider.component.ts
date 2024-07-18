import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, observeOn,Subject,combineLatest } from 'rxjs';
import { ImageService } from '../Services/image.service';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Item} from '../models/item';
import { Router } from '@angular/router';
import { UserService } from '../Services/user.service';

 //export interface Item{id?: string; name?: string; Description?:string; amount?:number; company?:string; date?:string}

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  private itemsCollection: AngularFirestoreCollection<Item>;
  //items: Observable<Item[]>;
  items1:Item[]=[];
  config: any;
  /* title = 'Angular-app'; */

  //Image UPload
  imgList!:any[];
  rowIndexArr!: any[];
  seclectedImg:any=null
  isSubmitted:boolean=false


  formTemplate = new FormGroup({
    caption: new FormControl('',Validators.required),
    category: new FormControl(''),
    imgUrl: new FormControl('',Validators.required)
  })

  //searching
  searchterm!:string ; 
  formsearch!: FormGroup;
  search!: FormControl; 

//++++ UPDATE ++++++++++++++++++++++
  editState: boolean = false;
  ToEdit!: Item;
  marked = false;

  // startAt=new Subject();//<=== Also searching
  // endAt=new Subject();

  // startobs=this.startAt.asObservable();
  // endobs=this.endAt.asObservable();

  // search($event:any){
  //   let q=$event.target.value;
  //   this.startAt.next(q);
  //   this.endAt.next(q+'\uf8ff')
  // }

  // fireQuery(start:any,end:any){
  //   return this.afs.collection('items',ref=>ref.limit(4).orderBy('name').startAt(start).endAt(end)).valueChanges();
  // }
  //=============== End searching  ====================+++++++++++++++++++++


  //constructor
  constructor(
    private readonly afs: AngularFirestore, 
    private service:ImageService, 
    private router:Router, 
    private userService: UserService
    ) {
    this.itemsCollection = this.afs.collection<Item>('items1');
			//this.items = this.itemsCollection.valueChanges();
			
			
		  this.itemsCollection.valueChanges( { idField: 'idField' }).subscribe(data=>{
        this.items1 =data;
        console.log(this.items1);
        console.log("count of item" +this.items1.length);
        this.config = {
          itemsPerPage: 3,
          currentPage: 1,
         totalItems: this.items1.length
        };
      });
			//this.items = this.itemsCollection.valueChanges( { idField: 'id1' }); //chỉ sử dụng cho Angular 8,9
   }

   formupdate!: FormGroup;
  ngOnInit(): void {
    

    //===== Searching ======|||||||||||||||||||||
    this.userService.getItem().subscribe((items1: Item[]) => {
      this.items1 = items1
      this.formupdate = new FormGroup({
        id: new FormControl(),
        name: new FormControl(),
        Description: new FormControl(),
        amount: new FormControl(),
        date: new FormControl(),
        company: new FormControl(),
      })
    })
    this.formsearch = new FormGroup({
      search: new FormControl(),
    })

    
    // combineLatest(this.startobs,this.endobs).subscribe((value)=>{
    //    this.fireQuery(value[0], value[1]).subscribe(items1=>{
    //     items1=this.items1;
    //   });
    // })

    //Image
    this.service.imgDetailList.snapshotChanges().subscribe(
      list=> {
        this.imgList = list.map(item => {return item.payload.val();});
        this.rowIndexArr= Array.from(Array(Math.ceil((this.imgList.length +1)/ 3)).keys());
      }
    );
    this.service.getImgDetailList();
  }


  inputNull() {
    if (this.searchterm == "") {
      this.ngOnInit();
    }
  }

  Search() {
    console.log(this.searchterm);

    if (this.searchterm == "") {//Khong co du thi tra ve table mac dinh
      this.ngOnInit();
    }
    else {
      this.items1 = this.items1.filter(res => {
        return res.name?.toLocaleLowerCase().match(this.searchterm.toLocaleLowerCase());
        //so sanh du lieu tren mang vs du liêu nhap vao: kieu chu thuong
      })
    }
  }

  add( ){
    this.router.navigate(["/admin/addItem"]);
  }

  // delete(id=""){
  //   this.itemsCollection.doc(id).delete();
  // }

  delete(event: any, items1: Item) {
    this.userService.deleteItem(items1);
    // this.itemsCollection.doc().delete()
    // this.itemsCollection.doc(items1.id).delete();
    alert('Xoá Nhân Viên Thành Công');
  }
  edit(item: Item) {
    this.editState = true;
    this.ToEdit = item;
  }

  update(data:{id: string;
    name: string;
    Description: string;
    amount: number;
    date: string;
    company: string;})
    {
    let it : Item = {};
    it.id = data.id
    it.name = data.name
    it.Description = data.Description
    it.amount = data.amount
    it.date = data.date
    it.company = data.company

    const id = this.afs.createId();

    this.itemsCollection.doc(id).update(data);//thêm với docid tự động tạo
    this.clearState()
    alert("Success")
  }

  clearState() {
    this.editState = false;
  }
  back(){
    this.clearState()
    this.router.navigate(["/admin"]);
  }


  pageChanged(event:number){
    this.config.currentPage = event;
  }
  
  //img
  get formControls(){
    return this.formTemplate['controls']
  }

  
}
