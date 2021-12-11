import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloProducto } from 'src/app/modelos/producto.modelo';
import { ProductoService } from 'src/app/servicios/producto.service';

@Component({
  selector: 'app-eliminar-producto',
  templateUrl: './eliminar-producto.component.html',
  styleUrls: ['./eliminar-producto.component.css']
})
export class EliminarProductoComponent implements OnInit {
  id:string= '';

  fgValidador: FormGroup = this.fb.group({
    'id': ['', [Validators.required]]
  });

  constructor(private fb: FormBuilder, 
    private servicioProducto: ProductoService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.BuscarProducto();
  }

  BuscarProducto(){
    this.servicioProducto.ObtenerRegistroPorId(this.id).subscribe((datos: ModeloProducto)=>{
      this.fgValidador.controls["id"].setValue(this.id);
    });
  }

  EliminarProducto(){
    this.servicioProducto.EliminarProducto(this.id)
    .subscribe((datos)=>{
      alert("Producto eliminado correctamente");
      this.router.navigate(['/administracion/listar-productos']);
    }, (error: any) =>{
      alert("Error eliminando el producto");
    })
  }

}
