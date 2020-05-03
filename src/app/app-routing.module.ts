import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { ManageCategoriesComponent } from './home/manage-categories/manage-categories.component';
import { ManageExpencesComponent } from './home/manage-expences/manage-expences.component';
import { ExpenceSummaryComponent } from './home/expence-summary/expence-summary.component';
import { AddCategoryComponent } from './manage-categories/add-category/add-category.component';
import { EditCategoryComponent } from './manage-categories/edit-category/edit-category.component';
import { AllCategoryComponent } from './manage-categories/all-category/all-category.component';
import { AllExpenseComponent } from './manage-expences/all-expense/all-expense.component';
import { AddExpenseComponent } from './manage-expences/add-expense/add-expense.component';
import { EditExpenseComponent } from './manage-expences/edit-expense/edit-expense.component';


const routes: Routes = [

  {path:'home', component: HomeComponent ,children : [
    {path:'',component: DashboardComponent},
    {path:'manage-categories',component: ManageCategoriesComponent, children: [
      {path:'',component:AllCategoryComponent},
      {path:'add-category',component:AddCategoryComponent},
      {path:'edit-category/:id',component:EditCategoryComponent}

    ]},

  {path:'auth' , component: AuthComponent,children : [
    {path:'' ,component:SigninComponent},
    {path:'signup' ,component:SignupComponent},
    {path:'reset-password' ,component:ResetPasswordComponent}
  ]},

    {path:'manage-expenses',component: ManageExpencesComponent, children: [
      {path:'',component:AllExpenseComponent},
      {path:'add-expense',component:AddExpenseComponent},
      {path:'edit-expense/:id1',component:EditExpenseComponent}
    ]},
    {path:'expense-summary',component: ExpenceSummaryComponent},

  ]},
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
