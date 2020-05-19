import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  udata:any
  googleuser:any
  constructor(public auth:AuthService,public router:Router,public db:AngularFirestore,public afauth:AngularFireAuth) { }

  ngOnInit() {
  this.auth.userdata().subscribe(result=>{
    this.udata=result[0]
    console.log(result[0].uname)
    
  })

    // this.afauth.authState.subscribe(result=>{
    //   console.log(result)

    //   this.googleuser=result
    //   console.log(this.googleuser)
    //})

    this.afauth.authState.subscribe(res=>
      {
        console.log(res)
        this.googleuser=res
      })
  }



}
