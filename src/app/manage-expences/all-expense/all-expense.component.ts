import { Component, OnInit } from '@angular/core';
import { ExpenseService } from 'src/app/expense.service';

@Component({
  selector: 'app-all-expense',
  templateUrl: './all-expense.component.html',
  styleUrls: ['./all-expense.component.css']
})
export class AllExpenseComponent implements OnInit {
  items=[]
  constructor(public ExpenseService:ExpenseService) { }

  ngOnInit() {
    this.items=this.ExpenseService.getExpense()
    console.log(this.items)
  }
  del(i)
  {
    this.ExpenseService.delExpense(i)
  }

}
