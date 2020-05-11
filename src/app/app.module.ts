import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule} from '@angular/forms';


import {AngularFireAuthModule} from '@angular/fire/auth';
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
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import {NgxPaginationModule} from 'ngx-pagination';
import { NotfoundcomponentComponent } from './notfoundcomponent/notfoundcomponent.component';
import { AuthService } from './auth.service';


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
    NotfoundcomponentComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFirestoreModule,
    NgxPaginationModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
