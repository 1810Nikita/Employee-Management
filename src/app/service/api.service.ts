import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Emp } from '../model/user.model';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl: string ="http://localhost:3000/emplist";

  constructor(private http: HttpClient) { };

  postRegistration(registerObj: Emp) {
    return this.http.post<Emp>(`${this.baseUrl}`, registerObj);
    }

  getRegisterdUser() {
    return this.http.get<Emp[]>(`${this.baseUrl}`);
  }

  updateRegisteredUser(registerObj: Emp,id: Number) {
    return this.http.put<Emp>(`${this.baseUrl}/${id}`, registerObj);
  }

  deleteRegisteredUser(id:Number) {
    return this.http.delete<Emp>(`${this.baseUrl}/${id}`);
  }

  getRegisterdUserId(id:Number) {
    return this.http.get<Emp>(`${this.baseUrl}/${id}`);
  }

}
