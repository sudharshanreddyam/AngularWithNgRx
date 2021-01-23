import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPageComponent } from './containers/add-page/add-page.component';
import { CoursesPageComponent } from './containers/courses-page/courses-page.component';
import { EditPageComponent } from './containers/edit-page/edit-page.component';
import { LoginPageComponent } from './containers/login-page/login-page.component';
import { AuthGuardService } from './services/auth.guard.service';


const routes: Routes = [
  {
    path: '', children: [
      { path: '', redirectTo: '/login', pathMatch: 'full' },
      { path: 'login', component: LoginPageComponent },
      { path: 'courses', component: CoursesPageComponent, canActivate: [ AuthGuardService ] },
      { path: 'add', component: AddPageComponent, canActivate: [ AuthGuardService ] },
      { path: ':id/edit', component: EditPageComponent, canActivate: [ AuthGuardService ] }
    ]
  },
];

@NgModule( {
  imports: [ RouterModule.forRoot( routes ) ],
  exports: [ RouterModule ]
} )
export class AppRoutingModule { }
