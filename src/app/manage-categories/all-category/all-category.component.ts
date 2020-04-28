import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/category.service';

@Component({
  selector: 'app-all-category',
  templateUrl: './all-category.component.html',
  styleUrls: ['./all-category.component.css']
})
export class AllCategoryComponent implements OnInit {
  items=[]
  constructor(public categoryService:CategoryService) { }

  ngOnInit() {
    this.items=this.categoryService.getCategory()
    console.log(this.items)
  }
  del(i){
    this.categoryService.delCategory(i)
  }

}
