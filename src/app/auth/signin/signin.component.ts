import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
 email
 password
 
  constructor(public service:AuthService) { }

  ngOnInit() {
  }
onSubmit(formdata2 : NgForm)
{
  this.service.signIn(this.email,this.password)
  
  console.log(formdata2.value);
  formdata2.resetForm();
}
googlesigniin()
{
  this.service.loginG()
}
}
