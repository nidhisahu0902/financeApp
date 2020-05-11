import { Component, OnInit } from '@angular/core';
import { AppModule } from 'src/app/app.module';
import { NgForm } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  constructor(public db:AngularFirestore) { }

  ngOnInit() {
  }
  
  onReset(formdata: NgForm)
  {
    console.log(formdata.value);
    this.db    
    formdata.resetForm();
  }
}
