import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LoginService {

  url = 'http://localhost:8080/api/usuarios';

  constructor(private http: HttpClient){}
    listar(){
      return this.http.get<any[]>(`${this.url}`);
    }
   
}
