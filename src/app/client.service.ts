import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Client } from './client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

   url= "http://localhost:3000/clients";

  constructor(private http: HttpClient) { }


  getClients(): Observable<Client[]> {
      let url = "http://localhost:3000/clients";
      return this.http.get<Client[]>(url);
  }

 save(Client : Client): Observable<Client> {
    return this.http.post<Client>(this.url,Client);
}
}






