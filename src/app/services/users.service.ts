import { Injectable } from '@angular/core';
import {  Observable } from 'rxjs';
import { ResponseUsers,RequestCreate,ResponseCreate,ResponseUser,RequestUpdate,ResponseUpdate} from '../interfaces/users.type';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private url = "https://629e3ab9c6ef9335c0b12a95.mockapi.io/api/v1/users";

  constructor(private http: HttpClient) {}

  getUsers(): Observable<ResponseUsers[]> {
    return this.http.get<ResponseUsers[]>(this.url);
  }

  createUser(user: RequestCreate): Observable<ResponseCreate> {
    return this.http.post<ResponseCreate>(this.url, user);
  }

  getUser(id: string): Observable<ResponseUser> {
    const _url = `${this.url}/${id}`;
    return this.http.get<ResponseUser>(_url);
  }

  updateUser(id:string,request:RequestUpdate): Observable<ResponseUpdate>{
    const _url =`${this.url}/${id}`
    return this.http.put<ResponseUpdate>(_url,request)
  }
  
  deleteUser(id:string): Observable<any>{
    const _url =`${this.url}/${id}`
    return this.http.delete<any>(_url)
  }
}
