import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(public http:HttpClient) { }

  getForm(){
  return this.http.get('http://localhost:3000/profile')
  }

  postForm(data:any){
   return this.http.post('http://localhost:3000/profile',data)
  }

  deleteForm(id:any){
    return this.http.delete('http://localhost:3000/profile/'+id)
  }
}
