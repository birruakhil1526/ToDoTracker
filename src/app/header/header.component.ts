import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { TodoServiceService } from '../Service/todo-service.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  list!:any[];
 
  todoTitle!:any
  checkEmail!:any;
  name!:any;
  public length1:any
 
  search(){
    this.service.searchText=this.todoTitle;
    this.todoTitle="";
  } 


  message:string="You can reach us at apptodo7@gmail.com"
  success:string="Thank you";

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );
  constructor(private snackbar:MatSnackBar,private breakpointObserver: BreakpointObserver, public service:TodoServiceService, private route:Router) { }

  logout(){
    this.service.logout();
    localStorage.clear();
    this.length1=0;
    this.name="";
    this.route.navigateByUrl("login");
  }
  

  aboutus(){
    this.snackbar.open(this.message, this.success, {duration:5000}, )
  }
  getAlltodos(){
    if(this.service.logged){
    const email = localStorage.getItem("email");
    this.service.getTodos(email)?.subscribe((x)=>{this.checkEmail=x.email})
    if(email==this.checkEmail){
    this.service.getTodos(email)?.subscribe((x)=>{this.list=x.todoList;this.length1=this.list?.length;this.name=x.firstname.charAt(0).toUpperCase()+x.firstname.slice(1)})
    }
  }
  }

  ngOnInit(): void {
  this.getAlltodos()

  }
  
}
