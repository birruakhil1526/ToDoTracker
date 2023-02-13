import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { LayoutModule } from '@angular/cdk/layout';

import {MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';
import { TodoBodyComponent } from './todo-body/todo-body.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import {MatRadioModule} from '@angular/material/radio';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatInputModule} from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { TodoDisplayComponent } from './todo-display/todo-display.component';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatExpansionModule} from '@angular/material/expansion';
import { AddTodosComponent } from './add-todos/add-todos.component';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { HotTodosComponent } from './hot-todos/hot-todos.component';
import { AllTodosComponent } from './all-todos/all-todos.component';
import { DeletedTodosComponent } from './deleted-todos/deleted-todos.component';
import { CompletedTodosComponent } from './completed-todos/completed-todos.component';
import {MatMenuModule} from '@angular/material/menu';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FeedbackComponent } from './feedback/feedback.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { JwPaginationModule } from 'jw-angular-pagination';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TodoBodyComponent,
    RegistrationComponent,
    LoginComponent,
    TodoDisplayComponent,
    AddTodosComponent,
    HotTodosComponent,
    AllTodosComponent,
    DeletedTodosComponent,
    CompletedTodosComponent,
    PageNotFoundComponent,
    FeedbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    LayoutModule,
    MatRadioModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatInputModule,
    HttpClientModule,
    MatCardModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatSelectModule,
    MatDatepickerModule,
    MatMenuModule,
    NgxPaginationModule,
    JwPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
