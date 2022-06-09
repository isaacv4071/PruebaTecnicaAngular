import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseUsers, RequestUpdate } from '../interfaces/users.type';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private url = "https://629e3ab9c6ef9335c0b12a95.mockapi.io/api/v1/users";

  constructor(private http: HttpClient) { }

  $id: string = "";

  getUsers(): Observable<ResponseUsers[]> {
    return this.http.get<ResponseUsers[]>(this.url);
  }

  createUser(user) {
    return this.http.post(this.url, user).subscribe(() => {
      window.location.reload();
    });
  }

  setId(id: string) {
    this.$id = id;
  }

  getId() {
    return this.$id;
  }

  getUser(id: string) {
    const _url = `${this.url}/${id}`;
    return this.http.get(_url);
  }

  updateUser(id: string, request: RequestUpdate) {
    const _url = `${this.url}/${id}`
    return this.http.put(_url, request).subscribe(() => {
      window.location.reload();
    })
  }

  deleteUser(id: string) {
    const _url = `${this.url}/${id}`
    return this.http.delete(_url).subscribe(() => {
      window.location.reload();
    });
  }
}
