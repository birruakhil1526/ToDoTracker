import { Component, OnInit } from '@angular/core';
import { TodoServiceService } from '../Service/todo-service.service';

@Component({
  selector: 'app-completed-todos',
  templateUrl: './completed-todos.component.html',
  styleUrls: ['./completed-todos.component.css']
})
export class CompletedTodosComponent implements OnInit {

  constructor(private service:TodoServiceService) { }
  
  list!:any[];
  get1(){
    const email = localStorage.getItem("email");
    this.service.getTodos(email).subscribe((x) => {this.list = x.completedTodos;
    });
  }

  ngOnInit(): void {
    this.get1()
   
  }

}
