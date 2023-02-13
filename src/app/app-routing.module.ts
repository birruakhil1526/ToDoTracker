import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoBodyComponent } from './todo-body/todo-body.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { AddTodosComponent } from './add-todos/add-todos.component';
import { HotTodosComponent } from './hot-todos/hot-todos.component';
import { TodoDisplayComponent } from './todo-display/todo-display.component';
import { AllTodosComponent } from './all-todos/all-todos.component';
import { DeletedTodosComponent } from './deleted-todos/deleted-todos.component';
import { CompletedTodosComponent } from './completed-todos/completed-todos.component';
import { AccessTodoAppGuard } from './access-todo-app.guard';
import { BackFromEditGuard } from './back-from-edit.guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FeedbackComponent } from './feedback/feedback.component';


const routes: Routes = [
  {
    path:'home', component:TodoBodyComponent, canActivate:[AccessTodoAppGuard]
  },
  {
    path:"", redirectTo:"home", pathMatch:"full",
  },
  {
    path:'register', component:RegistrationComponent 
  },
  {
    path:'login', component:LoginComponent
  },
  {
    path:'addtodos',component:AddTodosComponent, canActivate:[AccessTodoAppGuard], canDeactivate:[BackFromEditGuard]
  },
  {
    path:"imp/:todoTitle", component: TodoDisplayComponent,  canActivate:[AccessTodoAppGuard]
  },
  {
    path:"important", component:HotTodosComponent, canActivate:[AccessTodoAppGuard]
  },
  {
    path:"delete/:todoTitle", component: HotTodosComponent
  },
  {path:"deletetodo/:todoTitle",component:AllTodosComponent, canActivate:[AccessTodoAppGuard]},
  {
    path:"alltodos",component:AllTodosComponent, canActivate:[AccessTodoAppGuard]
  },
  {
    path:"deletedTodos",component:DeletedTodosComponent, canActivate:[AccessTodoAppGuard]
  },
  {
    path:"completed",component:CompletedTodosComponent, canActivate:[AccessTodoAppGuard]
  },
  {
    path:"comp/:completedTitle",component:TodoDisplayComponent
  },{
    path:'addtodos/:editTodos',component:AddTodosComponent,  canDeactivate:[BackFromEditGuard]
  },{
    path:"feedback",component:FeedbackComponent,
  },{
    path:"archive",component:DeletedTodosComponent, canActivate:[AccessTodoAppGuard]
  },
  {
    path:"archive/:archivedTitle", component:TodoDisplayComponent
  },
  {
    path:"unarchive/:unarchivedTitle", component:DeletedTodosComponent
  }
  ,
  {
      path: "**", component: PageNotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
