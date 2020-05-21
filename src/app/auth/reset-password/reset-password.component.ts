import { Component, OnInit } from '@angular/core';
import { AppModule } from 'src/app/app.module';
import { NgForm } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  mail
  constructor(public db:AngularFirestore,public afauth:AngularFireAuth,public authservice:AuthService) { }

  ngOnInit() {
  }
  
  onResetbutton(formdata : NgForm)
  {
     let udata=formdata.value.mail
    this.authservice.resetpassword(udata)     
    formdata.resetForm();
  }
}
