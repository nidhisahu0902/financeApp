import { Component, OnInit } from '@angular/core';
import { ExpenseService } from 'src/app/expense.service';

@Component({
  selector: 'app-all-expense',
  templateUrl: './all-expense.component.html',
  styleUrls: ['./all-expense.component.css']
})
export class AllExpenseComponent implements OnInit {
  items=[]
  p:number=1;
  constructor(public ExpenseService:ExpenseService) { }

  ngOnInit() {
   // this.items=this.ExpenseService.getExpense()
    this.ExpenseService.getExpense().subscribe(res1=>{
      this.items=res1
      console.log(res1)
    })
    
  }
  del(i)
  {
    this.ExpenseService.delExpense(i)
  }

}
