import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { ExpenceSummaryComponent } from './home/expence-summary/expence-summary.component';
import { ManageCategoriesComponent } from './home/manage-categories/manage-categories.component';
import { ManageExpencesComponent } from './home/manage-expences/manage-expences.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { AddCategoryComponent } from './manage-categories/add-category/add-category.component';
import { EditCategoryComponent } from './manage-categories/edit-category/edit-category.component';
import { AllCategoryComponent } from './manage-categories/all-category/all-category.component';
import { AddExpenseComponent } from './manage-expences/add-expense/add-expense.component';
import { EditExpenseComponent } from './manage-expences/edit-expense/edit-expense.component';
import { AllExpenseComponent } from './manage-expences/all-expense/all-expense.component';
import { NavbarhomeComponent } from './navbarhome/navbarhome.component';




@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    HomeComponent,
    ResetPasswordComponent,
    SigninComponent,
    SignupComponent,
    DashboardComponent,
    ExpenceSummaryComponent,
    ManageCategoriesComponent,
    ManageExpencesComponent,
    FooterComponent,
    NavbarComponent,
    AddCategoryComponent,
    EditCategoryComponent,
    AllCategoryComponent,
    AddExpenseComponent,
    EditExpenseComponent,
    AllExpenseComponent,
    NavbarhomeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
