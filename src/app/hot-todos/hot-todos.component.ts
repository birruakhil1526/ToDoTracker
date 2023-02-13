import { Component, OnInit } from '@angular/core';
import { TodoServiceService } from '../Service/todo-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-hot-todos',
  templateUrl: './hot-todos.component.html',
  styleUrls: ['./hot-todos.component.css']
})
export class HotTodosComponent implements OnInit {

  
  message:string="Removed"
  success:string="success";
  constructor(private service: TodoServiceService, private ar:ActivatedRoute, private router:Router, private snackbar:MatSnackBar) { }

  list!:any[];
  get1(){
    const email = localStorage.getItem("email");
    this.service.getTodos(email).subscribe((x) => {this.list = x.importantTodo;
    });
  }

  deleteImpTodo(){
    this.ar.paramMap.subscribe(param=>{
      let id=param.get("todoTitle");
      if(id!=null){
        this.service.deleteImpTodo(id).subscribe(()=>{
          this.snackbar.open(this.message,this.success , {duration:3000});
        })
        this.router.navigateByUrl("");
      }
      else{
        this.router.navigateByUrl("important");
      }
    })
  }
 

  ngOnInit(): void {
      this.get1();
       this.deleteImpTodo();
  }

  }