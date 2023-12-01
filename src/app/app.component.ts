import { Component } from '@angular/core';
import { EmpleadosComponent } from './models/empleados/empleados.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  empleadoarray: EmpleadosComponent[] = [
    {id: 1, nombre:"Rodolfo" },
    {id: 2, nombre:"Alberto" },
    {id: 3, nombre:"Eustacio" },
  ];
  SelectedEmpleado: EmpleadosComponent= new EmpleadosComponent();
  AbrirEditar(empleado: EmpleadosComponent){
    this.SelectedEmpleado= empleado;
  }
  agregaroModificar(){
    if (this.SelectedEmpleado.id === 0){
      this.SelectedEmpleado.id = this.empleadoarray.length + 1;
      this.empleadoarray.push(this.SelectedEmpleado);
    }


    this.SelectedEmpleado = new EmpleadosComponent();
  }
  eliminar(){
    if (confirm('Esta seguro de eliminarlo?')){
      this.empleadoarray = this.empleadoarray.filter(x => x != this.SelectedEmpleado);
      this.SelectedEmpleado = new EmpleadosComponent();
    }
  }  

}

