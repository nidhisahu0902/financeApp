import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService  {
uid=null

  constructor(public router:Router,public authdb:AngularFireAuth) { 
    this.authdb.authState.subscribe(res=>{
      if(res)
      {
        this.uid=res.uid
        console.log(res)
        this.router.navigateByUrl("/home")
      }
    })
  }

signIn(email,password)
{
    
   
  this.authdb.auth.signInWithEmailAndPassword(email,password).then(res=>{
    console.log(res.user.uid)
    this.uid=res.user.uid
    this.router.navigateByUrl("/home")    
    alert("Login SuccessFull")
  }).catch(err=>{
    alert(err)
  })
}

signup(email,password)
{
  this.authdb.auth.createUserWithEmailAndPassword(email,password).then(res=>{
    console.log(res.user.uid)
    this.uid=res.user.uid
    this.router.navigateByUrl("/home")
  }).catch(err=>{
    alert(err)
  })
}
loginG() {
  this.authdb.auth.signInWithPopup(new auth.GoogleAuthProvider());
}
isLoggedin()
{
  if(this.uid){
    return true
  }
  else
  {
    return false
  }
}

logout()
{
  
  this.authdb.auth.signOut()
  this.uid=null
  this.router.navigateByUrl("/auth")
}
getuid()
{
  return this.uid
}

}
