import { HttpService } from './service/http.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  user$:any = new Observable<Object>
  title = '24.2';
  id : number = 0;
  username: string = '';

  constructor (private http: HttpService){}
  // ngOnInit(): void {
  //     this.http.getAll().subscribe((data) => {console.log(data)});
  // }
  getAllUser(){
    this.user$ = this.http.getAll();
  }
  PostUser(){
    this.http.createUser({
      id:this.id,
      username : this.username
    })
    this.id = 0;
    this.username = '';
  }
}
