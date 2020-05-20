import { Component, OnInit } from '@angular/core';
import { AppModule } from 'src/app/app.module';
import { NgForm } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  email:any
  constructor(public db:AngularFirestore,public afauth:AngularFireAuth) { }

  ngOnInit() {
  }
  
  onReset(formdata: NgForm)
  {
    console.log(formdata.value);
    let data=formdata.value.email
    this.afauth.auth.sendPasswordResetEmail(data)      
    formdata.resetForm();
  }
}
