import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const clientsData = 'assets/data/clients.json';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor(private http: HttpClient) { }

  getClients(): Observable<any> {
    return this.http.get(clientsData);
  }
}
