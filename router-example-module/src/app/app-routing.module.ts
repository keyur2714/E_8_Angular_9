import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ItemComponent } from './admin/item/item.component';
import { ItemEntryComponent } from './admin/item-entry/item-entry.component';
import { AuthGuardService } from './auth-guard.service';


const routes: Routes = [
  {path : 'home' , component : HomeComponent},
  {path : 'contact-us' , component : ContactUsComponent},
  {path : 'about-us' , component : AboutUsComponent,canActivate : [AuthGuardService]},  
  {path : 'admin' , loadChildren : () => import('./admin/admin.module').then(a => a.AdminModule)},
  {path : 'login' , component : LoginComponent},  
  {path : 'logout' , component : LogoutComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(){
    console.log("App Routing Module Object Created...!");
  }
 }
