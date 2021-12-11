import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidadorSesionGuard } from 'src/app/guardianes/validador-sesion.guard';
import { BuscarClienteComponent } from './clientes/buscar-cliente/buscar-cliente.component';
import { CrearClienteComponent } from './clientes/crear-cliente/crear-cliente.component';
import { EditarClienteComponent } from './clientes/editar-cliente/editar-cliente.component';
import { EliminarClienteComponent } from './clientes/eliminar-cliente/eliminar-cliente.component';
import { BuscarProductoComponent } from './productos/buscar-producto/buscar-producto.component';
import { CrearProductoComponent } from './productos/crear-producto/crear-producto.component';
import { EditarProductoComponent } from './productos/editar-producto/editar-producto.component';
import { EliminarProductoComponent } from './productos/eliminar-producto/eliminar-producto.component';

const routes: Routes = [
  {
    path: 'listar-clientes',  
    component: BuscarClienteComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: 'crear-cliente',  
    component: CrearClienteComponent,
    canActivate: [ValidadorSesionGuard]

  },
  {
    path: 'editar-cliente/:id',  
    component: EditarClienteComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: 'eliminar-cliente/:id',  
    component: EliminarClienteComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: 'buscar-cliente',  
    component: BuscarClienteComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: 'listar-productos',  
    component: BuscarProductoComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: 'crear-producto',  
    component: CrearProductoComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: 'editar-producto/:id',  
    component: EditarProductoComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: 'eliminar-producto/:id',  
    component: EliminarProductoComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: 'buscar-producto',  
    component: BuscarProductoComponent,
    canActivate: [ValidadorSesionGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }
