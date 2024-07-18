import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import {AngularFireModule} from '@angular/fire/compat'
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { NodeItemComponent } from './node-item/node-item.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { BrandingAreaComponent } from './branding-area/branding-area.component';
import { MainmenuComponent } from './mainmenu/mainmenu.component';
import { SliderComponent } from './slider/slider.component';
import { PromoComponent } from './promo/promo.component';
import { MainContentComponent } from './main-content/main-content.component';
import { BrandsAreaComponent } from './brands-area/brands-area.component';
import { ProductWidgetComponent } from './product-widget/product-widget.component';
import { FooterComponent } from './footer/footer.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InsertNodeItemComponent } from './insert-node-item/insert-node-item.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { ShopSideComponent } from './shop-side/shop-side.component';
import { CheckoutComponent } from './header/checkout/checkout.component';
import { WishListComponent } from './header/wish-list/wish-list.component';
import { ProfileComponent } from './header/profile/profile.component';
import { SignupComponent } from './login/signup/signup.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { LoginLayoutComponent } from './login-layout/login-layout.component';
import { ImagesComponent } from './images/images.component';
import { ImageComponent } from './images/image/image.component';
import { ImageListComponent } from './images/image-list/image-list.component';
import { AddItemComponent } from './add-item/add-item.component';
    



@NgModule({
  declarations: [
    AppComponent,
    NodeItemComponent,
    HeaderComponent,
    BrandingAreaComponent,
    MainmenuComponent,
    SliderComponent,
    PromoComponent,
    MainContentComponent,
    BrandsAreaComponent,
    ProductWidgetComponent,
    FooterComponent,
    InsertNodeItemComponent,
    LoginComponent,
    CartComponent,
    SingleProductComponent,
    ShopSideComponent,
    CheckoutComponent,
    WishListComponent,
    ProfileComponent,
    SignupComponent,
    MainLayoutComponent,
    LoginLayoutComponent,
    ImagesComponent,
    ImageComponent,
    ImageListComponent,
    AddItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
		AngularFirestoreModule,
		AngularFireAuthModule,
    HttpClientModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    AngularFireDatabaseModule,
    FormsModule,
    AngularFireStorageModule,
    //FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
