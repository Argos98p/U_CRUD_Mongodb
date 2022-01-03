import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Aeropuerto } from 'src/app/models/aeropuerto';
import { AeropuertoService } from 'src/app/services/aeropuerto.service';

@Component({
  selector: 'app-crear-aeropuerto',
  templateUrl: './crear-aeropuerto.component.html',
  styleUrls: ['./crear-aeropuerto.component.css']
})
export class CrearAeropuertoComponent implements OnInit {

  aeropuertoForm:FormGroup;
  titulo='Crear Aeropuerto';
  id:string | null;

  constructor( private fb:FormBuilder, private router:Router, private toastr: ToastrService,
    private aeropuertoService:AeropuertoService,
    private aRouter:ActivatedRoute
    ) { 

    this.aeropuertoForm=this.fb.group({
      airport:['',Validators.required],
      city:['',Validators.required],
      country:['',Validators.required],
      iata:['',Validators.required],
      lat:['',Validators.required],
      long:['',Validators.required],
      state:['',Validators.required]

    })

    this.id=this.aRouter.snapshot.paramMap.get('id')
  }

  agregarAeropuerto(){
    console.log(this.aeropuertoForm);
    
    const aeropuerto:Aeropuerto={
      airport:this.aeropuertoForm.get('airport')?.value,
      city:this.aeropuertoForm.get('city')?.value,
      country:this.aeropuertoForm.get('country')?.value,
      iata:this.aeropuertoForm.get('iata')?.value,
      lat:this.aeropuertoForm.get('lat')?.value,
      long:this.aeropuertoForm.get('long')?.value,
      state:this.aeropuertoForm.get('state')?.value,
    };
    console.log(aeropuerto);
    if(this.id !==null){

      this.aeropuertoService.editarAeropuerto(this.id,aeropuerto).subscribe(data =>{
        this.toastr.info('El elemento fue actualizado satisfactoriamente', 'Elemento actualizado');
      },error =>{console.log(error);
      })
    }else{

      
      
      this.aeropuertoService.guardarAeropuerto(aeropuerto).subscribe(data=>{
        this.toastr.success('El elemento fue registrado satisfactoriamente', 'Elemento Registrado');
      },error=>{console.error();
        this.aeropuertoForm.reset();
      })
    }
    this.router.navigate(['listar-aeropuerto'])
      
    
  }

  ngOnInit(): void {
    this.esEditar()
  }

  esEditar(){
    if(this.id !== null){
      this.titulo = "Editar Aeropuerto"
      this.aeropuertoService.obtenerAeropuerto(this.id).subscribe(data=>{
        this.aeropuertoForm.patchValue({
          airport:data.airport,
          city:data.city,
          country:data.country,
          iata:data.iata,
          lat:data.lat,
          long:data.long,
          state:data.state

        })
      })
    }
  }

}
