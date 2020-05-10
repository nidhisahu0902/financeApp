import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  uname
  number
  email
  password
  constructor(public auth:AuthService,public database:AngularFirestore) { }

  ngOnInit() {
  }
  onSubmit1(formdata1 : NgForm)
  {
    this.database.collection("user").add(formdata1.value)
    this.auth.signup(this.email,this.password)
    console.log(formdata1.value)
    formdata1.resetForm();
  }
}
