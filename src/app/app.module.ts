import { DatePipe } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule, Provider } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { CourseFormComponent } from './components/course-form/course-form.component';
import { CoursesItemComponent } from './components/courses-item/courses-item.component';
import { CoursesListComponent } from './components/courses-list/courses-list.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LoaderComponent } from './components/loader/loader.component';
import { LogoComponent } from './components/logo/logo.component';
import { AddPageComponent } from './containers/add-page/add-page.component';
import { CoursesPageComponent } from './containers/courses-page/courses-page.component';
import { EditPageComponent } from './containers/edit-page/edit-page.component';
import { LoginPageComponent } from './containers/login-page/login-page.component';
import { CourseDateDirective } from './directives/course-date.directive';
import { DurationPipe } from './pipes/duration.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { OrderByPipe } from './pipes/order-by.pipe';
import { AuthInterceptor } from './services/auth.intercepter';
import appReducer from './store/app/app.reducer';
import { AuthEffects } from './store/auth/auth.effects';
import authReducer from './store/auth/auth.reducer';
import { CoursesEffect } from './store/courses/courses.effects';
import coursesReducer from './store/courses/courses.reducer';
import { DurationControlComponent } from './components/duration-control/duration-control.component';
import { DateControlComponent } from './components/date-control/date-control.component';
import { AuthorsControlComponent } from './components/authors-control/authors-control.component';


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
    LoaderComponent,
    DurationControlComponent,
    DateControlComponent,
    AuthorsControlComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot( {
      app: appReducer,
      auth: authReducer,
      courses: coursesReducer
    } ),
    StoreDevtoolsModule.instrument(),
    StoreRouterConnectingModule.forRoot(),
    EffectsModule.forRoot( [ AuthEffects, CoursesEffect ] )
  ],
  providers: [ DatePipe, INTERCEPTOR_PROVIDER ],
  bootstrap: [ AppComponent ]
} )
export class AppModule { }
