import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';

import { Aerolinea } from 'src/app/models/aerolinea';
import { AerolineaService } from 'src/app/services/aerolinea.service';

@Component({
  selector: 'app-crear-aerolinea',
  templateUrl: './crear-aerolinea.component.html', 
  styleUrls: ['./crear-aerolinea.component.css']
})
export class CrearAerolineaComponent implements OnInit {

  aerolineaForm:FormGroup;
  titulo='Crear Aerolinea';
  id:string | null;

  constructor( private fb:FormBuilder, private router:Router, private toastr: ToastrService,
    private aerolineaService:AerolineaService,
    private aRouter:ActivatedRoute
    ) { 

    this.aerolineaForm=this.fb.group({
      Code:['',Validators.required],
      Description:['',Validators.required]

    })

    this.id=this.aRouter.snapshot.paramMap.get('id')
  }

  agregarAerolinea(){
    console.log(this.aerolineaForm);
    
    const aerolinea:Aerolinea={
      Code:this.aerolineaForm.get('Code')?.value,
      Description:this.aerolineaForm.get('Description')?.value,
    };
    console.log(aerolinea);
    if(this.id !==null){

      this.aerolineaService.editarAerolinea(this.id,aerolinea).subscribe(data =>{
        this.toastr.info('El elemento fue actualizado satisfactoriamente', 'Elemento actualizado');
      },error =>{console.log(error);
      })
    }else{

      
      
      this.aerolineaService.guardarAerolinea(aerolinea).subscribe(data=>{
        this.toastr.success('El elemento fue registrado satisfactoriamente', 'Elemento Registrado');
      },error=>{console.error();
        this.aerolineaForm.reset();
      })
    }
    this.router.navigate(['/'])
      
    
  }

  ngOnInit(): void {
    this.esEditar()
  }

  esEditar(){
    if(this.id !== null){
      this.titulo = "Editar Aerolinea"
      this.aerolineaService.obtenerAerolinea(this.id).subscribe(data=>{
        this.aerolineaForm.patchValue({
          Code:data.Code,
          Description:data.Description
        })
      })
    }
  }

}
