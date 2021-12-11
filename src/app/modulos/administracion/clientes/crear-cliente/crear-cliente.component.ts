import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloCliente } from 'src/app/modelos/cliente.modelo';
import { ClienteService } from 'src/app/servicios/cliente.service';

@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.css']
})
export class CrearClienteComponent implements OnInit {

  fgValidador: FormGroup = this.fb.group({
    'nombres': ['', [Validators.required]],
    'apellidos': ['', [Validators.required]],
    'direccion': ['', [Validators.required]],
    'celular': ['', [Validators.required]],
    'correo': ['', [Validators.required]]
  });

  constructor(private fb: FormBuilder, 
    private servicioCliente: ClienteService,
    private router: Router) { }

  ngOnInit(): void {
  }

  GuardarCliente(){
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
    this.servicioCliente.CrearCliente(p).subscribe((datos: ModeloCliente)=>{
      alert("Cliente almacenado correctamente");
      this.router.navigate(['/administracion/listar-clientes']);
    }, (error: any) =>{
      alert("Error almacenando el cliente");
    })
  }

}
