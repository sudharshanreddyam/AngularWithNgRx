import { DatePipe } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule, Provider } from '@angular/core';
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
import { AuthInterceptor } from './services/auth.intercepter';
import { LoaderComponent } from './loader/loader.component';

const INTERCEPTOR_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: AuthInterceptor,
  multi: true
};

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
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ DatePipe, INTERCEPTOR_PROVIDER ],
  bootstrap: [ AppComponent ]
} )
export class AppModule { }
