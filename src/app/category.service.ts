import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  categories=[]
  constructor(public db:AngularFirestore,public authser:AuthService) {
    //this.categories.push({name:"nidhi"})
   }

  addCat(category)
  {
      
//    this.categories.push(category)
    let newMember = {name:category.name,uid:this.authser.getuid()}
    this.db.collection("categories").add(newMember)  
    console.log(newMember)
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
    return this.db.collection("categories",ref=>ref.where("uid","==",this.authser.getuid())).snapshotChanges().pipe(
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
