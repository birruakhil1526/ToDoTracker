import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  useremail:any;
  
  message:string="Thank-you for Your Feedback."
  success:string="Ok";



onSubmit(feedBackForm: NgForm) {
  if (feedBackForm.valid) {
    const email = feedBackForm.value;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.http.post('https://formspree.io/f/mqkokvey',
      { Name: email.name, From: email.email, Feedback: email.messages },
      { 'headers': headers }).subscribe(
        response => {
          console.log(response);
        }
      );
      this.snackbar.open(this.message,this.success , {duration:5000});
      this.route.navigateByUrl("");
  }
}


  constructor(private snackbar:MatSnackBar,   private http : HttpClient, private route:Router) {
  
   }
  

  ngOnInit(): void {
    this.useremail=localStorage.getItem("email");
    console.log(this.useremail);
    
  }
}
