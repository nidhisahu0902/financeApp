import { Component, OnInit } from '@angular/core';
import { AppModule } from 'src/app/app.module';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  onReset(formdata: NgForm)
  {
    console.log(formdata.value);
    formdata.resetForm();
  }
}
