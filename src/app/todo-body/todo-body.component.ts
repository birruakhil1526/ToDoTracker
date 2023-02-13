import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoServiceService } from '../Service/todo-service.service';

@Component({
  selector: 'app-todo-body',
  templateUrl: './todo-body.component.html',
  styleUrls: ['./todo-body.component.css']
})
export class TodoBodyComponent implements OnInit {

   constructor(private ar:ActivatedRoute,private router:Router,private service:TodoServiceService) { }
  
  allTodos!:any[];

  get(){
    const email = localStorage.getItem("email");
    this.service.getTodos(email).subscribe((x) => {this.allTodos = x.todoList;
    });
  }


  ngOnInit(): void {
    this.get();
   
  }

}
