import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  categories=[]
  constructor(public db:AngularFirestore) {
    //this.categories.push({name:"nidhi"})
   }

  addCat(category)
  {
    
//    this.categories.push(category)
  this.db.collection("categories").add(category)  

  }

 delCategory(index)
  {
      //this.categories.splice(index,1)
      this.db.collection("categories").doc(index).delete()
   }
 editCat(i,upCategory)
   {
     //this.categories[index]=upCategory
     this.db.collection("categories").doc(i).update(upCategory) 
   }
   getCategory()
   {
    // return this.categories
    return this.db.collection("categories").snapshotChanges().pipe(
      map(actions => actions.map(a =>{
        const data = a.payload.doc.data() as any;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
   }
   getcat(id){
     //return this.categories[index]
     return this.db.collection("categories").doc(id).valueChanges()
   }
 }
