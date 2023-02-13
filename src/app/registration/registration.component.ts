import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, ValidationErrors, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { TodoServiceService } from '../Service/todo-service.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  message:string="Thank-you for your Registration"
  success:string="successful";

  failure:string="Sorry"
  message2:string="Email already registered with us try login"


  userDetails=this.fbr.group({
    firstname:['',[Validators.required, Validators.maxLength(10), Validators.minLength(4), Validators.pattern("[a-zA-Z][a-zA-Z ]{0,}")]],
    lastname:['', [Validators.required, Validators.maxLength(10), Validators.minLength(3), Validators.pattern("[a-zA-Z][a-zA-Z ]{0,}")]],
    email:['', [Validators.required, Validators.email, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-z]+\\.[a-z]{2,4}$')]],
    password:['',[Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/)]],
    cpassword:['',[Validators.required]],
  },{validators:this.checkPassword})
  constructor(private fbr:FormBuilder,private router:Router,private snackbar:MatSnackBar, private todoService:TodoServiceService) { }

  get firstname(){
    return this.userDetails.get('firstname')
  }
  get lastname()
  {
    return this.userDetails.get('lastname')
  }
  get email()
  {
    return this.userDetails.get('email')
  }
  get password(){
    return this.userDetails.get('password')
  }
  get cpassword(){
    return this.userDetails.get('cpassword')
  }
  get role(){
    return this.userDetails.get('role')
  }

  checkPassword(fc:AbstractControl):ValidationErrors|null{
    var password1=fc.get('password')?.value;
    var confirmPassword=fc.get('cpassword')?.value;
    if(confirmPassword==""){
      return{passwordmatch1:false}
    }
    else if(password1!=confirmPassword){
      return{passwordmatch2:false};
    }
    return null;
  }

  submit(){
    this.todoService.addReg(this.userDetails.value).subscribe(
      (x)=>{localStorage.setItem("email", x.email), this.snackbar.open(this.message, this.success, {duration:2000})},
      (err:Error)=>{this.snackbar.open(this.message2, this.failure, {duration:2000}), console.log(err.message)}
     );
    this.router.navigateByUrl("/login");
  }

  ngOnInit(): void {
  }
  
}
