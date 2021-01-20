import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPageComponent } from './add-page/add-page.component';
import { CoursesPageComponent } from './courses-page/courses-page.component';
import { EditPageComponent } from './edit-page/edit-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { AuthGuardService } from './services/auth.guard.service';

const routes: Routes = [
  { path: '', redirectTo: '/courses', pathMatch: 'full' },
  { path: 'courses', component: CoursesPageComponent },
  { path: 'courses/new', component: AddPageComponent, canActivate: [ AuthGuardService ] },
  { path: 'courses/:id', component: EditPageComponent, canActivate: [ AuthGuardService ] },
  { path: 'login', component: LoginPageComponent },
  { path: '**', component: NotFoundPageComponent }
];

@NgModule( {
  imports: [ RouterModule.forRoot( routes ) ],
  exports: [ RouterModule ]
} )
export class AppRoutingModule { }
