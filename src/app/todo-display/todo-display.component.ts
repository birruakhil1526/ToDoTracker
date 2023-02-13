import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoServiceService } from '../Service/todo-service.service';
import { MatAccordion } from '@angular/material/expansion';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-todo-display',
  templateUrl: './todo-display.component.html',
  styleUrls: ['./todo-display.component.css']
})
export class TodoDisplayComponent implements OnInit {
  
  message:string="Completed."
  message1:string="Todo is Archived."
  message2:string="Saved To Important."
  success:string="Ok";

  @Input()
  todos!:any[];

  impTodos!:any[];
  completed!:any[];
  archived!:any[];
  p:number=1;
  itemsPerPage:number=1;

  // items :any =10;
  // pageOfItems!: Array<any>;
  // pageSize=2;

  //   onChangePage(pageOfItems: Array<any>) {
  //     // update current page of items
  //     this.pageOfItems = pageOfItems;
  // }


  categories:any[]=["General", "Food", "Shopping", "Travel", "Groceries"]
  constructor(public dbservice:TodoServiceService, private route:Router, private ar:ActivatedRoute, private snackbar:MatSnackBar) {
    this.p=dbservice.page;
   }
  ressult:any
  
  addtoImp(){
    this.ar.paramMap.subscribe(param=>{
      let id=param.get("todoTitle");

      const email = localStorage.getItem("email");

      this.dbservice.getTodos(email).subscribe((x:any)=>{this.impTodos=x.importantTodo;
    
      if(id!=null){
         this.ressult=this.impTodos?.map(a=>a.todoTitle)
        if(!this.ressult?.includes(id)){
          
        this.dbservice.imp1Todo(id).subscribe(()=>{
          this.snackbar.open(this.message2,this.success , {duration:5000});
        })
        this.route.navigateByUrl("important");}
        else{
          alert("already Exists in Imp List");
         
          this.route.navigateByUrl("");
        }
      }
      else{
        this.route.navigateByUrl("");
        
      }
     
    })})
  }

   addtoArchivedTodos(){
    this.ar.paramMap.subscribe(param=>{
      let id=param.get("archivedTitle");
      const email = localStorage.getItem("email");
      this.dbservice.getTodos(email).subscribe((x:any)=>{this.archived=x.archiveTodos;
      if(id!=null){
        let ressult=this.archived?.map(a=>a.todoTitle)
        if(!ressult?.includes(id)){
        this.dbservice.archiveTodo(id).subscribe(()=>{
          this.snackbar.open(this.message1,this.success , {duration:5000});
        })
        this.route.navigateByUrl("archive");}
        else{
          alert("already Exists in Archived List");
          this.route.navigateByUrl("");
        }
      }
      else{
        this.route.navigateByUrl("");
      }
    })})
  }



  addtoCompletedTodos(){
    this.ar.paramMap.subscribe(param=>{
      let id=param.get("completedTitle");
      const email = localStorage.getItem("email");
      this.dbservice.getTodos(email).subscribe((x:any)=>{this.completed=x.completedTodos;
      if(id!=null){
        let ressult=this.completed?.map(a=>a.todoTitle)
        if(!ressult?.includes(id)){
        this.dbservice.completedTodos(id).subscribe(()=>{
          this.snackbar.open(this.message,this.success , {duration:5000});
        })
        this.route.navigateByUrl("completed");}
        else{
          alert("already Exists in Completed List");
          this.route.navigateByUrl("");
        }
      }
      else{
        this.route.navigateByUrl("");
      }
    })})
  }



  addToTodo(){
    this.route.navigateByUrl("addtodos")
  }

  ngOnInit(): void {
    this.addtoArchivedTodos();
    this.addtoCompletedTodos();
    this.addtoImp();
    
  
  }

  
}