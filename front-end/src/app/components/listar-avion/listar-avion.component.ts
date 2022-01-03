import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Avion } from 'src/app/models/avion';
import { AvionService } from 'src/app/services/avion.service';

@Component({
  selector: 'app-listar-avion',
  templateUrl: './listar-avion.component.html',
  styleUrls: ['./listar-avion.component.css']
})
export class ListarAvionComponent implements OnInit {

  listAviones: Avion[]=[];
  p: number = 1;

  constructor(private _avionService: AvionService,private toastr:ToastrService ,private spinner_service:NgxSpinnerService) { }


  obtenerAviones(){
    this._avionService.getAviones().subscribe(data =>{
      console.log(data);
      this.listAviones=data;
    },error=>{console.log(error);
    })
  }
  ngOnInit(): void {
    this.obtenerAviones();
    this.spinner();
  }

  eliminarAvion(id:any){
    this._avionService.eliminarAvion(id).subscribe(data=>{
      this.toastr.error('La avion fue elimado con exito','Avion eliminada')   ;
      this.obtenerAviones();
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
    }, 2500);
  }
}
