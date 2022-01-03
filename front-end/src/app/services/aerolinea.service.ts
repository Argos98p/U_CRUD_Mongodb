import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Aerolinea } from '../models/aerolinea';

@Injectable({
  providedIn: 'root'
})
export class AerolineaService {

  url ='http://localhost:4000/api/aerolinea/'
  constructor(private http:HttpClient) { }

  getAerolineas():Observable<any>{
    return this.http.get(this.url);
  }


  eliminarAerolinea(id:string):Observable<any>{
    return this.http.delete(this.url+id)
  }

  guardarAerolinea(aerolinea:Aerolinea):Observable<any>{
    return this.http.post(this.url,aerolinea);
  }

  obtenerAerolinea(id:string):Observable<any>{
    return this.http.get(this.url+id)
  }

  editarAerolinea(id:string, aerolinea:Aerolinea):Observable<any>{
    return this.http.put(this.url+id,aerolinea);
  }
}
