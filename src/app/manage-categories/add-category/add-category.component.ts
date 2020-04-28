import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CategoryService } from 'src/app/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  category:{name:string}={name:""}

  constructor(public CategoryService:CategoryService,public router:Router) { }

  ngOnInit() {
  }

  addCategory()
  {
      let newCat={name:this.category.name}
      this.CategoryService.addCat(newCat)
      this.category.name=""
      this.router.navigateByUrl("home/manage-categories")
  }

}
