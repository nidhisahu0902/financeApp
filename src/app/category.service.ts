import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  categories=[]
  constructor() {
    this.categories.push({name:"nidhi"})
   }

  addCat(category)
  {
    
    this.categories.push(category)
    

  }

 delCategory(index)
  {
      this.categories.splice(index,1)
   }
 editCat(index,upCategory)
   {
     this.categories[index]=upCategory 
   }
   getCategory()
   {
     return this.categories

   }
   getcat(index){
     return this.categories[index]
   }
 }
