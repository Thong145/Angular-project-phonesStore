import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ImageService } from 'src/app/Services/image.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  imgSrc: string='/assets/img/no-image-available.jpg'
  seclectedImg:any=null
  isSubmitted:boolean=false


  formTemplate = new FormGroup({
    caption: new FormControl('',Validators.required),
    category: new FormControl(''),
    imgUrl: new FormControl('',Validators.required)
  })

  constructor(private store:AngularFireStorage, private service:ImageService) { }

  ngOnInit(): void {
    this.resetForm();
  }

  showPreview(event:any){
    if(event.target.files && event.target.files[0]){
      const reader = new FileReader();
      reader.onload=(e:any)=> this.imgSrc = e.target.result;
      reader.readAsDataURL(event.target.files[0]);
      this.seclectedImg=event.target.files[0];
    }
    else{
      this.imgSrc='/assets/img/no-image-available.jpg';
      this.seclectedImg=null;
    }
  }

  onSubmit(formValue: any){
    this.isSubmitted=true
    if(this.formTemplate.valid){
      var filePath=`${formValue.category}/${this.seclectedImg.name.split('.').slice(0,-1).join('.')}_${new Date().getTime()}`;
      const fileRef=this.store.ref(filePath);
      this.store.upload(filePath,this.seclectedImg).snapshotChanges().pipe(
        finalize(()=>{
          fileRef.getDownloadURL().subscribe((url)=>{
            formValue['imgUrl']=url;
            this.service.insertImgDetail(formValue);
            this.resetForm();
          })
        })
      ).subscribe();
    }
  }

  get formControls(){
    return this.formTemplate['controls']
  }

  resetForm(){
    this.formTemplate.reset();
    this.formTemplate.setValue({
      caption:'',
      imgUrl:'',
      category:'Samsung'
    });
    this.imgSrc = '/assets/img/no-image-available.jpg';
    this.seclectedImg=null
    this.isSubmitted=false
  }

}
