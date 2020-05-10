import { Component, OnInit } from '@angular/core';
import { ExpenseService } from 'src/app/expense.service';
import { CategoryService } from 'src/app/category.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-expence-summary',
  templateUrl: './expence-summary.component.html',
  styleUrls: ['./expence-summary.component.css']
})
export class ExpenceSummaryComponent implements OnInit {
categories=[]
Expense=[]
sum=0
value
  constructor(public categoryservice:CategoryService,public expenseservice:ExpenseService,public db1:AngularFirestore
    ,public authser:AuthService) {

      this.add(this.Expense)

  this.categoryservice.getCategory().subscribe(res=>{
    console.log(res)
    this.categories=res
  })
  this.expenseservice.getExpense().subscribe(res1=>{
    console.log(res1)
    this.Expense=res1
  })
}
  ngOnInit() {

  }

add(data){
  this.value=data
  for(let j=0; j<data.length; j++){
    this.sum=this.sum+this.value[j].amount
  }
}
  getExpense(){
    return this.db1.collection("expenses",ref=>ref.where("uid","==",this.authser.getuid())). snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as any;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
}
}