import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  expenses=[]
  constructor(public db1:AngularFirestore) { 
    // this.expenses.push({category:"movie",name:"food", amount:"100", date:"12-4-20"})
  }

 
addExpense(expense)
{
  //this.expenses.push(expense)
  this.db1.collection("expenses").add(expense)
  console.log(this.expenses)
}

getExpense(){
  return this.db1.collection("expenses").snapshotChanges().pipe(
    map(actions => actions.map(a => {
      const data = a.payload.doc.data() as any;
      const id = a.payload.doc.id;
      return { id, ...data };
    }))
  );
}

delExpense(index)
{
  //this.expenses.splice(index,1)
  this.db1.collection("expenses").doc(index).delete()
}
editEx(index,upEx)
{
  //this.expenses[index]=upEx 
  this.db1.collection("expenses").doc(index).set(upEx)
}
getex(id){
   //return this.expenses[index]
   return this.db1.collection("expenses").doc(id).valueChanges()
}
}