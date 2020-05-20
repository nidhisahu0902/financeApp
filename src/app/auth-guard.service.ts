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
      if(this.auth.isverifired())
      {
        return true
      }
  
    }
    else
    {
      console.log("false")
      this.router.navigateByUrl("/auth")  
      return false
        
    }
  }
}
