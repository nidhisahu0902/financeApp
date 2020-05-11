import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbarhome',
  templateUrl: './navbarhome.component.html',
  styleUrls: ['./navbarhome.component.css']
})
export class NavbarhomeComponent implements OnInit {

  constructor(public auth:AuthService,public router:Router) { }

  ngOnInit() {
  }

  logout()
  {  
    this.auth.logout()
    this.router.navigateByUrl("/auth")  
   
  }

}
