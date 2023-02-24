import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }
  getAll(){
    return this.http.get(`${environment.api_url}all`);
  }
  createUser(body : any){
    return this.http.post(`${environment.api_url}create`,body).subscribe();
  }
}
