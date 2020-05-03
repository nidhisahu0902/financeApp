import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/category.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {
  index
  category:any=null
  constructor(public CategoryService:CategoryService,public router:Router,public route:ActivatedRoute) { }

  ngOnInit() {
    this.index=this.route.snapshot.paramMap.get("id")
    console.log(this.index)
  //  this.category=this.CategoryService.getcat(this.index)
  this.CategoryService.getcat(this.index).subscribe(result=>{
    this.category=result
  })
  }

  editCategory(){
    let newCat={name:this.category.name}
    this.CategoryService.editCat(this.index,newCat)
    this.category.name=""
    this.router.navigateByUrl("/home/manage-categories")
  }

}
