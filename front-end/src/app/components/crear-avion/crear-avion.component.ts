import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AvionService } from 'src/app/services/avion.service';
import { Avion } from 'src/app/models/avion';
@Component({
  selector: 'app-crear-avion',
  templateUrl: './crear-avion.component.html',
  styleUrls: ['./crear-avion.component.css']
})
export class CrearAvionComponent implements OnInit {

  avionForm:FormGroup;
  titulo='Crear Avion';
  id:string | null;

  constructor( private fb:FormBuilder, private router:Router, private toastr: ToastrService,
    private avionService:AvionService,
    private aRouter:ActivatedRoute
    ) { 

    this.avionForm=this.fb.group({
      aircraft_type:[''],
      engine_type:[''],
      issue_date:[''],
      manufacturer:[''],
      model:[''],
      status:[''],
      tailnum:[''],
      type:[''],
      year:[''], 
      })

    this.id=this.aRouter.snapshot.paramMap.get('id')
  }

  agregarAvion(){
    console.log(this.avionForm);
    
    const avion:Avion={
      aircraft_type:this.avionForm.get('aircraft_type')?.value,
      engine_type:this.avionForm.get('engine_type')?.value,
      issue_date:this.avionForm.get('issue_date')?.value,
      manufacturer:this.avionForm.get('manufacturer')?.value,
      model:this.avionForm.get('model')?.value,
      status:this.avionForm.get('status')?.value,
      tailnum:this.avionForm.get('tailnum')?.value,
      type:this.avionForm.get('type')?.value,
      year:this.avionForm.get('year')?.value,

    };
    console.log(avion);
    if(this.id !==null){

      this.avionService.editarAvion(this.id,avion).subscribe(data =>{
        this.toastr.info('El elemento fue actualizado satisfactoriamente', 'Elemento actualizado');
      },error =>{console.log(error);
      })
    }else{

      
      
      this.avionService.guardarAvion(avion).subscribe(data=>{
        this.toastr.success('El elemento fue registrado satisfactoriamente', 'Elemento Registrado');
      },error=>{console.error();
        this.avionForm.reset();
      })
    }
    this.router.navigate(['/'])
      
    
  }

  ngOnInit(): void {
    this.esEditar()
  }

  esEditar(){
    if(this.id !== null){
      this.titulo = "Editar Avion"
      this.avionService.obtenerAvion(this.id).subscribe(data=>{
        
        
        
        this.avionForm.patchValue({
          aircraft_type:data.aircraft_type,
          engine_type:data.engine_type,
          issue_date:data.issue_date,
          manufacturer:data.manufacturer,
          model:data.model,
          status:data.status,
          tailnum:data.tailnum,
          type:data.type,
          year:data.year
        })
      })
    }
  }
}
