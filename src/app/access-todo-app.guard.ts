import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TodoServiceService } from './Service/todo-service.service';

@Injectable({
  providedIn: 'root'
})
export class AccessTodoAppGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.login.logged){
        return true;
      }else{
          this.router.navigateByUrl("login");
          return false;
      }
  }
  constructor(private login:TodoServiceService, private router:Router){}

  
  }
  
