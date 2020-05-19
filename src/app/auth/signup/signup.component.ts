import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent
 implements OnInit {
 
  userdata:{uname:string,number:string,email:string,password:string}={uname:"",number:"",email:"",password:""}
  constructor(public auth:AuthService,public database:AngularFirestore) { }

  ngOnInit() {
  }
  onSubmit1(formdata1 : NgForm)
  {
    let newudata = formdata1.value
   
    this.auth.signup(newudata)
    console.log(formdata1.value)
    formdata1.resetForm();
  }
}
