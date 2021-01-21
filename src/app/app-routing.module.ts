import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPageComponent } from './add-page/add-page.component';
import { CoursesPageComponent } from './courses-page/courses-page.component';
import { EditPageComponent } from './edit-page/edit-page.component';
import { LoginPageComponent } from './login-page/login-page.component';

const routes: Routes = [
  {
    path: '', children: [
      { path: '', redirectTo: '/login', pathMatch: 'full' },
      { path: 'login', component: LoginPageComponent },
      { path: 'courses', component: CoursesPageComponent },
      { path: 'add', component: AddPageComponent },
      { path: ':id/edit', component: EditPageComponent }
    ]
  },
];

@NgModule( {
  imports: [ RouterModule.forRoot( routes ) ],
  exports: [ RouterModule ]
} )
export class AppRoutingModule { }
