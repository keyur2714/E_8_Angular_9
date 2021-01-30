import { Injectable } from '@angular/core';
import { CanActivate, Router, CanActivateChild } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class AuthGuardService implements CanActivate , CanActivateChild{
   
    
    constructor(private authService :AuthenticationService,private router: Router) {

    }
    
    canActivate(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot): boolean {
        let url = state.url;
        console.log(route.params);
        if(this.authService.isLoggedIn){
            return true;
        }        
        this.authService.successUrl = url;
        this.router.navigate(['/login']);        
        return false;
        
    }

    canActivateChild(childRoute: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot): boolean  {
        console.log(childRoute.params);
        //alert("Child" + state.url +" "+this.authService.loggedInUserRole);
        let role = this.authService.loggedInUserRole;        
        if(role === 'USER' && state.url === '/admin/item-entry'){
            alert("You don't have permission to add new items.");
            return false;
        }
        return true;    
    }

}