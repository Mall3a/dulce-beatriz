import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
})
export class ProductoComponent {

  producto:any={}

  constructor(private activatedRoute: ActivatedRoute,
              private _heroeService: ProductosService) {
    this.activatedRoute.params.subscribe(params =>{ this.producto = this._heroeService.getProducto(params['id']); });
  }
}
