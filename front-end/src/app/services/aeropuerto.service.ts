import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Aeropuerto } from '../models/aeropuerto';

@Injectable({
  providedIn: 'root'
})
export class AeropuertoService {

  url ='http://localhost:4000/api/aeropuerto/'
  constructor(private http:HttpClient) { }

  getAeropuertos():Observable<any>{
    return this.http.get(this.url);
  }


  eliminarAeropuerto(id:string):Observable<any>{
    return this.http.delete(this.url+id)
  }

  guardarAeropuerto(aeropuerto:Aeropuerto):Observable<any>{
    return this.http.post(this.url,aeropuerto);
  }

  obtenerAeropuerto(id:string):Observable<any>{
    return this.http.get(this.url+id)
  }

  editarAeropuerto(id:string, aeropuerto:Aeropuerto):Observable<any>{
    return this.http.put(this.url+id,aeropuerto);
  }
}
