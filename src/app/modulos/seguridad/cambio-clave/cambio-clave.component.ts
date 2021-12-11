import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloCliente } from 'src/app/modelos/cliente.modelo';
import { ClienteService } from 'src/app/servicios/cliente.service';

@Component({
  selector: 'app-cambio-clave',
  templateUrl: './cambio-clave.component.html',
  styleUrls: ['./cambio-clave.component.css']
})
export class CambioClaveComponent implements OnInit {

  id:string= '';

  fgValidador: FormGroup = this.fb.group({
    'id': ['', [Validators.required]],
    'nombres': ['', [Validators.required]],
    'apellidos': ['', [Validators.required]],
    'direccion': ['', [Validators.required]],
    'celular': ['', [Validators.required]],
    'correo': ['', [Validators.required]]
  });

  constructor(private fb: FormBuilder, 
    private servicioCliente: ClienteService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.BuscarCliente();
  }

  BuscarCliente(){
    this.servicioCliente.ObtenerRegistroPorId(this.id).subscribe((datos: ModeloCliente)=>{
      this.fgValidador.controls["id"].setValue(this.id);
      this.fgValidador.controls["nombres"].setValue(datos.nombres);
      this.fgValidador.controls["apellidos"].setValue(datos.apellidos);
      this.fgValidador.controls["direccion"].setValue(datos.direccion);
      this.fgValidador.controls["celular"].setValue(datos.celular);
      this.fgValidador.controls["correo"].setValue(datos.correo);
    });
  }
CambiarClaveCliente(){
  let nombres = this.fgValidador.controls['nombres'].value;
  let apellidos = this.fgValidador.controls['apellidos'].value;
  let direccion = this.fgValidador.controls['direccion'].value;
  let celular = this.fgValidador.controls['celular'].value;
  let correo = this.fgValidador.controls['correo'].value;
  let p = new ModeloCliente();
  p.nombres = nombres;
  p.apellidos = apellidos;
  p.direccion = direccion;
  p.celular = celular;
  p.correo = correo;
  p.id = this.id;
  this.servicioCliente.CambiarClaveCliente(p).subscribe((datos: ModeloCliente) => {
    alert("Clave del cliente actualizado correctamente");
    this.router.navigate(['/administracion/listar-clientes']);
  }, (error: any) => {
    alert("Error actualizando clave del cliente");
  })
}

}

