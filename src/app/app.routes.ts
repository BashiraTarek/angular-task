import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { AboutComponent } from './components/about/about.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductDetailsComponent } from './components/productdetails/productdetails.component';

export const routes: Routes = [


    {path: 'home', component:HomeComponent},
    {path: 'contactus', component:ContactusComponent},
    {path: 'about', component: AboutComponent},
    {path: 'login', component:LoginComponent},
    { path: 'product/:id', component: ProductDetailsComponent},
    {path: 'profile', component:ProfileComponent},
    {path:'cart',component:CartComponent},
    {path :'',component:HomeComponent}




];
