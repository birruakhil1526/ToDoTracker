import { Component, OnInit } from '@angular/core';
import { TodoServiceService } from '../Service/todo-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-all-todos',
  templateUrl: './all-todos.component.html',
  styleUrls: ['./all-todos.component.css']
})
export class AllTodosComponent implements OnInit {


  message:string="Deleted"
  success:string="success";


  constructor(private service:TodoServiceService,private ar:ActivatedRoute,private router:Router, private snackbar:MatSnackBar) { }
  list!:any[];
  actual!:any[];
  get1(){
    const email = localStorage.getItem("email");
    if(this.service.searchText==undefined){
    this.service.getTodos(email).subscribe((x) => {this.list = x.todoList;

    })
    ;} else{
      this.service.getTodos(email).subscribe((y)=>
      {
        this.actual=y.todoList;
        this.list=this.actual?.filter((z:any)=>z.todoTitle?.toLowerCase().startsWith(this.service.searchText.toLowerCase()))
        this.service.searchText=undefined;
      }
      )
    }
    
      
      
      
      
    
  }
 
  deletetodo(){
    this.ar.paramMap.subscribe(params=>{
      let id=params.get('todoTitle');
      if(id!=null){
      this.service.deletealltodo(id).subscribe(()=>{
        this.snackbar.open(this.message,this.success , {duration:5000});
        this.router.navigateByUrl("alltodos")})
      this.router.navigateByUrl("alltodos")
      }
      else{
        this.router.navigateByUrl("alltodos")
      }
    })
  }

  ngOnInit(): void {
    this.get1()
    this.deletetodo()
    
  }

}
