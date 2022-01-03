import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Avion } from '../models/avion';

@Injectable({
  providedIn: 'root'
})
export class AvionService {

  url ='http://localhost:4000/api/avion/'
  constructor(private http:HttpClient) { }

  getAviones():Observable<any>{
    return this.http.get(this.url);
  }


  eliminarAvion(id:string):Observable<any>{
    return this.http.delete(this.url+id)
  }

  guardarAvion(avion:Avion):Observable<any>{
    return this.http.post(this.url,avion);
  }

  obtenerAvion(id:string):Observable<any>{
    return this.http.get(this.url+id)
  }

  editarAvion(id:string, avion:Avion):Observable<any>{
    return this.http.put(this.url+id,avion);
  }
}