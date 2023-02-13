import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TodoServiceService } from '../Service/todo-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  success:string="Thank you"
  message:string="Welcome To Todo"

  exists:string="Sorry"
  message1:string="Email Doesn't Exist's"

  match:string="Sorry"
  message2:string="Email and Password Doesn't Match"


  loginform=this.fb.group({
    email:['', [Validators.required]],
    password:['', [Validators.required]]});

    get email() { return this.loginform.get("email") }
    get password() { return this.loginform.get("password") }
  constructor(private fb:FormBuilder, private loginService:TodoServiceService, private snackBar: MatSnackBar, private route:Router){
    // this.loginform.setValue({email:"test@gmail.com",password:"Bunny@3681"})
  }

  response:any;
  name:any;

  OnLogin(){
    this.loginService.login(this.loginform.value).subscribe(
      x=>{
       this.loginService.loggedintrue();
       this.name=this.email;
        this.response=x;
        localStorage.setItem("jwtToken",this.response.token);
        localStorage.setItem("email", this.response.email);
        this.route.navigateByUrl("")
        this.snackBar.open(this.message, this.success, {duration:3000})
      }, (err:Error)=>{ 
        console.log(err.message)
        if(err.message.endsWith("404 OK")){
          this.snackBar.open(this.message1, this.exists, {duration:3000})
        }else{
          this.snackBar.open(this.message2, this.match, {duration:3000})
      }
        }
    )
    }
    

  ngOnInit(): void {
  }

}
