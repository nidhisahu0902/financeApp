import { Component, OnInit } from '@angular/core';
import { ExpenseService } from 'src/app/expense.service';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/category.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from 'src/app/auth.service';


@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.css']
})
export class AddExpenseComponent implements OnInit {
  expense:{category:string,name:string,amount:number,date:string}={category:"",name:"",amount:0,date:""}
  categories:any
  constructor(public db:AngularFirestore ,public ExpenseService:ExpenseService,public CategoryServise:CategoryService, public route:Router,public auth:AuthService) 
  { }

  ngOnInit() {
    
    this.categories=this.CategoryServise.getCategory().subscribe(res1=>{
      this.categories=res1
    })

  }

  addEx(){
      let newEx={category:this.expense.category,name:this.expense.name,amount:this.expense.amount,date:this.expense.date,uid:this.auth.getuid()}
      this.ExpenseService.addExpense(newEx)
      console.log(newEx)
      this.expense.name=""
      this.expense.amount=0
      this.expense.date=""
      this.expense.category=""
      this.route.navigateByUrl("/home/manage-expenses")
     
  }
}
