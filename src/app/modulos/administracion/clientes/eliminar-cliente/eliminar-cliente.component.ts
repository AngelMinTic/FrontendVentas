import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloCliente } from 'src/app/modelos/cliente.modelo';
import { ClienteService } from 'src/app/servicios/cliente.service';

@Component({
  selector: 'app-eliminar-cliente',
  templateUrl: './eliminar-cliente.component.html',
  styleUrls: ['./eliminar-cliente.component.css']
})
export class EliminarClienteComponent implements OnInit {

  id:string= '';

  fgValidador: FormGroup = this.fb.group({
    'id': ['', [Validators.required]]
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
    });
  }

  EliminarCliente(){
    this.servicioCliente.EliminarCliente(this.id)
    .subscribe((datos)=>{
      alert("Cliente eliminado correctamente");
      this.router.navigate(['/administracion/listar-clientes']);
    }, (error: any) =>{
      alert("Error eliminando el cliente");
    })
  }
}
