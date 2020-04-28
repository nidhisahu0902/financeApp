import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  expenses=[]
  constructor() { 
    this.expenses.push({category:"movie",name:"food", amount:"100", date:"12-4-20"})
  }

 
addExpense(expense)
{
  this.expenses.push(expense)
  console.log(this.expenses)
}

getExpense(){
  return this.expenses
}

delExpense(index)
{
  this.expenses.splice(index,1)
}
editEx(index,upEx)
{
  this.expenses[index]=upEx 
}
getex(index){
   return this.expenses[index]
}
}