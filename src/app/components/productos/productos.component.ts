import { Component, OnInit } from '@angular/core';
import { ProductosService, Producto } from '../../services/productos.service';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
})
export class ProductosComponent implements OnInit {

  productos: Producto[] = [];
  
  constructor( private _heroesService: ProductosService) { 
  }

  ngOnInit() {
    this.productos = this._heroesService.getProductos();
  }


}
