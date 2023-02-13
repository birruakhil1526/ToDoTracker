import { Component, OnInit } from '@angular/core';
import { TodoServiceService } from '../Service/todo-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-deleted-todos',
  templateUrl: './deleted-todos.component.html',
  styleUrls: ['./deleted-todos.component.css']
})
export class DeletedTodosComponent implements OnInit {

  message:string="Un-Archived."
  success:string="success";

  constructor(private service:TodoServiceService, private router:Router, private ar:ActivatedRoute, private snackbar:MatSnackBar) { }
  deleted!:any[];


  removeFromArchive(){
    this.ar.paramMap.subscribe(param=>{
      let id=param.get("unarchivedTitle");
      if(id!=null){
        this.service.unArchiveTodo(id).subscribe(()=>{
          this.snackbar.open(this.message,this.success , {duration:5000});
        })
        this.router.navigateByUrl("");
      }
      else{
        this.router.navigateByUrl("archive");
      }
    })
  }
 
  

  

  ngOnInit(): void {
    this.removeFromArchive();
    const email=localStorage.getItem("email")
    this.service.getTodos(email).subscribe(x=>this.deleted=x.archiveTodos)
    
  }

}
