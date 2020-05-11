import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/category.service';

@Component({
  selector: 'app-all-category',
  templateUrl: './all-category.component.html',
  styleUrls: ['./all-category.component.css']
})
export class AllCategoryComponent implements OnInit {
  items=[]
  p: number = 1;
  constructor(public categoryService:CategoryService) { }

  ngOnInit() {
//    this.items=this.categoryService.getCategory()
    this.categoryService.getCategory().subscribe(res=>{
      this.items=res
      console.log(res)
    })
    
  }
  del(id){
    this.categoryService.delCategory(id)
  }

}
