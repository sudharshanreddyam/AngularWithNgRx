import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AddPageComponent } from './add-page/add-page.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { CourseFormComponent } from './course-form/course-form.component';
import { CoursesItemComponent } from './courses-item/courses-item.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CoursesPageComponent } from './courses-page/courses-page.component';
import { CourseDateDirective } from './directives/course-date.directive';
import { EditPageComponent } from './edit-page/edit-page.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { LogoComponent } from './logo/logo.component';
import { DurationPipe } from './pipes/duration.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { OrderByPipe } from './pipes/order-by.pipe';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';


@NgModule( {
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LogoComponent,
    CoursesPageComponent,
    BreadcrumbsComponent,
    CoursesListComponent,
    CoursesItemComponent,
    DurationPipe,
    CourseDateDirective,
    OrderByPipe,
    FilterPipe,
    LoginPageComponent,
    CourseFormComponent,
    AddPageComponent,
    EditPageComponent,
    NotFoundPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ FilterPipe ],
  bootstrap: [ AppComponent ]
} )
export class AppModule { }
