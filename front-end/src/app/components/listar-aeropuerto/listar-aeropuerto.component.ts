import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Aeropuerto } from 'src/app/models/aeropuerto';
import { AeropuertoService } from 'src/app/services/aeropuerto.service';

@Component({
  selector: 'app-listar-aeropuerto',
  templateUrl: './listar-aeropuerto.component.html',
  styleUrls: ['./listar-aeropuerto.component.css']
})
export class ListarAeropuertoComponent implements OnInit {

  listAeropuertos: Aeropuerto[]=[];
  p: number = 1;
  constructor(private _aeropuertoService: AeropuertoService,private toastr:ToastrService ,private spinner_service:NgxSpinnerService) { }


  obtenerAeropuertos(){
    this._aeropuertoService.getAeropuertos().subscribe(data =>{
      console.log(data);
      this.listAeropuertos=data;
    },error=>{console.log(error);
    })
  }
  ngOnInit(): void {
    this.obtenerAeropuertos();
    this.spinner();
  }

  eliminarAeropuerto(id:any){
    this._aeropuertoService.eliminarAeropuerto(id).subscribe(data=>{
      this.toastr.error('La aeropuerto fue elimado con exito','Aeropuerto eliminada')   ;
      this.obtenerAeropuertos();
    },error=>{
      console.log(error );
      
    })
  }

  spinner():void{
    this.spinner_service.show();
    this.spinner_service.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner_service.hide();
    }, 1500);
  }

}
