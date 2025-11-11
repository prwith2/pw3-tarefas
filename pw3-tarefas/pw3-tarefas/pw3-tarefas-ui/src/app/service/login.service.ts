import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../model/login';

@Injectable({
  providedIn: 'root'
})

InterfaceLoginResponse {
  token:string;
}
private apiUrl= 'http://localhost:8080';
private http=inject(HttpClient);

autenticar(username: string, password:string):Observable<LoginResponse> {
returnthis.http.post<LoginResponse>(`${this.apiUrl}/login`, { username,
password});
 }
