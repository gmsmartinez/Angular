import { Component } from '@angular/core';
import { ProductosService } from './servicios/productos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'servicios';
  productos:any;

  //inyectamos nuestro servicio de producto en el
  //constructor mediante el Dependy Inyector
  constructor(private productosService: ProductosService){

    //utilizamos el servicio Inyectado para obtener el json 
    //con la lista de productos (rows)
    this.productos = productosService.productos.rows;

    console.log(this.productos);
  }
}