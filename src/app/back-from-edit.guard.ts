import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AddTodosComponent } from './add-todos/add-todos.component';

@Injectable({
  providedIn: 'root'
})
export class BackFromEditGuard implements CanDeactivate<unknown> {
  canDeactivate(
    component: AddTodosComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let result:boolean=true;
    if(component.userTodos.touched)
    {
      if(confirm("Do you want to leave changes?"))
      {
        result= true;
      }
      else
      {
        result= false;
      }
    }
    return result;
  }
  
}
