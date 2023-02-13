import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, ValidationErrors, Validators } from '@angular/forms';
import { TodoServiceService } from '../Service/todo-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-add-todos',
  templateUrl: './add-todos.component.html',
  styleUrls: ['./add-todos.component.css']
})
export class AddTodosComponent implements OnInit {

  message:string="Todo is Added to Your TodoList"
  success:string="success";

  message1:string="Todo is Updated"

  userTodos=this.fbr.group({
    todoTitle:['', [Validators.required, Validators.maxLength(20), Validators.minLength(3)]],
    todoDescription:['', [Validators.required, Validators.minLength(4)]],
    category:['',Validators.required],
    dueDate:['',[Validators.required, this.dueDateCheck]],
    priority:['',Validators.required]
  })
  dueDateCheck(fc:AbstractControl):ValidationErrors|null {
    var date=fc.value;
    var today = formatDate(new Date(), 'yyyy-MM-dd', 'en-in');
    console.log(date);
    console.log(today);
    if(date==""){
      return {dueDateCheck1:false}
    }
    else if(date<today){
      return {dueDateCheck2:false};
    }
    return null;
  }
  get todoTitle(){
    return this.userTodos.get("todoTitle")
  }
  get todoDescription(){
    return this.userTodos.get("todoDescription")
  }
  get category(){
    return this.userTodos.get('category')
  }
  get dueDate(){
    return this.userTodos.get("dueDate")
  }
  get priority(){
    return this.userTodos.get("priority")
  }

  constructor(private snackbar:MatSnackBar, private fbr:FormBuilder, private service:TodoServiceService, private router:Router, private ar:ActivatedRoute) { 
    
  }
  submit(){
    this.service.page=1;
    this.ar.paramMap.subscribe(param=>{
      var id=param.get('editTodos');
      if(id==null){
        const email = localStorage.getItem("email");
        this.service.addTodoToUser(email, this.userTodos.value).subscribe(() => {this.snackbar.open(this.message, this.success, {duration:4000} ); this.router.navigateByUrl("")})
      }else{
            const email = localStorage.getItem("email");
            this.service.editTodoToUser(email, this.userTodos.value).subscribe(()=>{
              this.snackbar.open(this.message1, this.success, {duration:4000} );
              this.router.navigateByUrl("");
  });
  }})
}

  allTodos!:any[];
  array1:any;
  
  ngOnInit(): void {
    this.ar.paramMap.subscribe(param=>{
      let email1=localStorage.getItem("email");
      var id=param.get('editTodos');
      if(id!=null){
      this.service.getTodos(email1).subscribe((x:any)=>{this.allTodos=x.todoList;
        this.array1=this.allTodos.find(x=>x.todoTitle===id)
        this.userTodos.get("todoTitle")?.setValue("")
        this.userTodos.setValue({todoTitle: this.array1.todoTitle, todoDescription: this.array1.todoDescription, category:this.array1.category, dueDate:this.array1.dueDate, priority:this.array1.priority})
      
      })
    }
  }
      )
  }

}
