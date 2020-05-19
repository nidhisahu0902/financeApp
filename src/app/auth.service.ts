import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService  {
uid=null
user
  constructor(public router:Router,public authdb:AngularFireAuth, public ngZone:NgZone,public db:AngularFirestore
  ) { 
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

// signIn(email,password)
// {
//   return this.authdb.auth.signInWithEmailAndPassword(email,password)
//   .then((result) =>{
//     if(result.user.emailVerified !== true){
//       this.SendVerificationMail();
//       window.alert('Please validate your email address. kindly check your Inbox.');
//     } else {
//       this.ngZone.run(() =>{
//         this.router.navigate(['<!--enter your router name here-->'])
//       });
//     }
//     this.authdb.auth.currentUser.SetUserData(result.user);
//   }).catch((error) =>{
//     window.alert(error.message)
//   })
// }

SendVerificationMail() {
  
  return this.authdb.auth.currentUser.sendEmailVerification()
  .then(() => {
    this.router.navigateByUrl('/home');
  })
}

signup(newudata)
{

  return this.authdb.auth.createUserWithEmailAndPassword(newudata.email, newudata.password)
  .then((result) => {
    console.log(result)
    this.uid=result.user.uid;
    let newuid = result.user.uid
    let newdata={newuid,...newudata}
    this.db.collection("user").add(newdata)
    console.log(newudata)
    this.SendVerificationMail();
  }).catch((error) => {
    window.alert(error.message)
  })
}

   userdata()
{
  return this.db.collection("user",ref=>ref.where("newuid","==",this.getuid())).snapshotChanges().pipe(
    map(actions => actions.map(a =>{
      const data = a.payload.doc.data() as any;
      const id = a.payload.doc.id;
      return { id, ...data };
    }))
  );
}


// signup(email,password)
// {
//   return this.authdb.auth.createUserWithEmailAndPassword(email,password)
//   .then((result) => {
//       this.SendVerificationMail();
//   }).catch((error) => {
//     window.alert(error.message)
//     })
  
// }
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
