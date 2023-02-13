import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {

  private url:string;
  private url1:string;
  private url2:string;
  private url3:string;
  private url4:string;
  private url5:string;
  private url6:string;
  private url7:string;
  private url8:string;
  private url9:string;
  private url10:string;
  private url11:string;
  qwerty!:any[];

  username: any;
  newname: any;
  page!:number;
  name!:any;
  logged: boolean | undefined;

  searchText!:any;

  constructor(private httpconnection:HttpClient) {
    this.url="http://localhost:9090/v2/register";
    this.url1="http://localhost:9090/v1/login";
    this.url2="http://localhost:9090/v2/getone";
    this.url3="http://localhost:9090/v2/todo"
    this.url4="http://localhost:9090/v2/imp"
    this.url5="http://localhost:9090/v2/delete"
    this.url6="http://localhost:9090/v2/deleteallTodo"
    this.url7="http://localhost:8091/notifications";
    this.url8="http://localhost:9090/v2/completedtodo";
    this.url9="http://localhost:9090/v2/updatetodo";
    this.url10="http://localhost:9090/v2/archivetodo";
    this.url11="http://localhost:9090/v2/unarchivetodo";

   }

  addReg(regData:any):Observable<any>{
    return this.httpconnection.post(this.url, regData);
  }
  
  getTodos(email:any):Observable<any>{
    let httpHeaders = new HttpHeaders({
      'Authorization': 'Bearer '+localStorage.getItem("jwtToken")
    });
    let requestOptions={headers : httpHeaders}
    return this.httpconnection.get(this.url2+'/'+email,requestOptions);
  }

  imp1Todo(details:any){
    let email=localStorage.getItem('email')
    return this.httpconnection.get(this.url4+'/'+email+'/'+details);
  }
  

  addTodoToUser(email:any, data:any):Observable<any>{
    return this.httpconnection.post(this.url3+'/'+email, data)
  }

  deleteImpTodo(title:any){
    let email=localStorage.getItem('email')
    return this.httpconnection.delete(this.url5+'/'+email+'/'+title);
  }
  
  deletealltodo(title:any){
    let email=localStorage.getItem('email')
    return this.httpconnection.delete(this.url6+'/'+email+'/'+title)
  }

  getDeletedTodos():Observable<any>{
    return this.httpconnection.get(this.url7);
  }
  completedTodos(title:any):Observable<any>{
    let email=localStorage.getItem('email')
    return this.httpconnection.get(this.url8+'/'+email+'/'+title)
  }
  editTodoToUser(email:any, data:any):Observable<any>{
    return this.httpconnection.put(this.url9+'/'+email, data)
  }

  archiveTodo(title:any):Observable<any>{
    let email=localStorage.getItem('email')
    return this.httpconnection.get(this.url10+'/'+email+'/'+title)
  }

  unArchiveTodo(title:any){
    let email=localStorage.getItem('email')
    return this.httpconnection.delete(this.url11+'/'+email+'/'+title);
  }
  




  login(loginData:any):Observable<any>{
    return this.httpconnection.post(this.url1, loginData);
  }

  loggedintrue(){
    this.username=name;
    this.newname=this.username.charAt(0).toUpperCase();
    this.logged=true;
  }

  logout(){
     this.logged=false;
     localStorage.clear(); 
  }

}
