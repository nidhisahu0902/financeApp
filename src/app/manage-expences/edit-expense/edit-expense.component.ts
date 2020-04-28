import { Component, OnInit } from '@angular/core';
import { ExpenseService } from 'src/app/expense.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/category.service';

@Component({
  selector: 'app-edit-expense',
  templateUrl: './edit-expense.component.html',
  styleUrls: ['./edit-expense.component.css']
})
export class EditExpenseComponent implements OnInit {
  index
  categories=[]
  constructor(public ExpenseService:ExpenseService,public CategoryService:CategoryService, public router:Router,public route:ActivatedRoute) { }
  expense:{category:string,name:string,amount:string,date:string}={category:"",name:"",amount:"",date:""}
  ngOnInit() {
    this.index=this.route.snapshot.paramMap.get("id1")
    console.log(this.index)
    this.expense=this.ExpenseService.getex(this.index)
    this.categories=this.CategoryService.getCategory()
  }

  EditExpense(){
    let newEx={category:this.expense.category,name:this.expense.name,amount:this.expense.amount,date:this.expense.date}   
    this.ExpenseService.editEx(this.index,newEx)
    this.expense.name=""
    this.expense.amount=""
    this.expense.date=""
    this.expense.category=""
    this.router.navigateByUrl("/home/manage-expenses")
  }
}
