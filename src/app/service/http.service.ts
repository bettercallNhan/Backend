import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient:HttpClient) { }
  getAll(){
    return this.httpClient.get(`${environment.api_url}user/all`);
  }
  createUser(body : any){
    return this.httpClient.post(`${environment.api_url}user/create`,
    body).subscribe;
  }
}
