import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  imgDetailList!: AngularFireList<any>;


  constructor(private firebase:AngularFireDatabase) { }

  getImgDetailList(){
    this.imgDetailList = this.firebase.list('imgDetails')
  }

  insertImgDetail(imgDetails:any){
    this.imgDetailList.push(imgDetails);
  }
}
