import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Aerolinea } from 'src/app/models/aerolinea';
import { NgxSpinnerService } from 'ngx-spinner';  
import { AerolineaService } from 'src/app/services/aerolinea.service';

@Component({
  selector: 'app-listar-aerolinea',
  templateUrl: './listar-aerolinea.component.html',
  styleUrls: ['./listar-aerolinea.component.css']
})
export class ListarAerolineaComponent implements OnInit {

  listAerolineas: Aerolinea[]=[];
  p: number = 1;

  constructor(private _aerolineaService: AerolineaService,private toastr:ToastrService, private spinner_service:NgxSpinnerService ) { }


  obtenerAerolineas(){
    this._aerolineaService.getAerolineas().subscribe(data =>{
      console.log(data);
      this.listAerolineas=data;
    },error=>{console.log(error);
    })
  }
  ngOnInit(): void {
    this.obtenerAerolineas();
    this.spinner();
  }

  eliminarAerolinea(id:any){
    this._aerolineaService.eliminarAerolinea(id).subscribe(data=>{
      this.toastr.error('La aerolinea fue elimado con exito','Aerolinea eliminada')   ;
      this.obtenerAerolineas();
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
