import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddItemComponent } from './add-item/add-item.component';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { AuthGuard } from './guard/auth.guard';
import { CheckoutComponent } from './header/checkout/checkout.component';
import { ProfileComponent } from './header/profile/profile.component';
import { WishListComponent } from './header/wish-list/wish-list.component';
import { ImageListComponent } from './images/image-list/image-list.component';
import { ImageComponent } from './images/image/image.component';
import { ImagesComponent } from './images/images.component';
import { InsertNodeItemComponent } from './insert-node-item/insert-node-item.component';
import { LoginLayoutComponent } from './login-layout/login-layout.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './login/signup/signup.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { NodeItemComponent } from './node-item/node-item.component';
import { ShopSideComponent } from './shop-side/shop-side.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { SliderComponent } from './slider/slider.component';
const routes: Routes = [
  {
    path:"login", component:LoginLayoutComponent

  },
  
  
  {
    path:"signup", component:SignupComponent

  },
  
  {
    path:"profile", component:ProfileComponent

  },
  {
    path:"wishlist", component:WishListComponent

  },
  {
    path:"checkout", component:CheckoutComponent

  },
  
  {
    path:"shop", component:ShopSideComponent

  },
  {
    path:"cart", component:CartComponent

  },
  {
    path:"singleProduct", component:SingleProductComponent

  },

  

  {
    path:"admin", component:MainLayoutComponent,
    canActivate:[AuthGuard],
    children:[
      {
        path:"", component:SliderComponent
      },
      {
        path:"login", component:LoginLayoutComponent
    
      },
      {
        path:"items", component:SliderComponent
      },

      {
        path:"insertnode", component:InsertNodeItemComponent
    
      },

      {
        path:"nodeItem", component:NodeItemComponent
    
      },

      {
        path:"addItem", component:AddItemComponent
    
      },
      
    
      {
        path:"image", component:ImagesComponent,
        children:[
          {
            path:"upload", component:ImageComponent
          },
          
        ]
    
      },
      {
        path:"imagelist", component:ImageListComponent
      },
    ]
  },
  
  {
    path:"**", component:LoginLayoutComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
