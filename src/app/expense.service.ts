import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { CategoryService } from './category.service';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  
  //expense:{category:string,name:string,amount:string,date:string}={category:"",name:"",amount:"",date:""}
 
  constructor(public db1:AngularFirestore,public authser:AuthService) { 
    // this.expenses.push({category:"movie",name:"food", amount:"100", date:"12-4-20"})
    
  }

 
addExpense(expense)
{
  //this.expenses.push(expense)
  //let newExpense={category:this.expense.category,name:this.expense.name,amount:this.expense.amount,date:this.expense.date,uid:this.authser.getuid()}
  this.db1.collection("expenses").add(expense)
  console.log(expense)


}

getExpense(){
  return this.db1.collection("expenses",ref=>ref.where("uid","==",this.authser.getuid())).snapshotChanges().pipe(
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
  this.db1.collection("expenses").doc(index).update(upEx)
}
getex(id){
   //return this.expenses[index]
   return this.db1.collection("expenses").doc(id).valueChanges()
}
}