import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(public auth:AuthService,public router:Router) { }

  canActivate(): boolean {
    if(this.auth.isLoggedin())
    {
 
        return true
    }
    else
    {
      console.log("true")
      this.router.navigateByUrl("/auth")  
      return false
        
    }
  }
}
