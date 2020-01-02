import { Component, OnInit } from '@angular/core';
import { ProductosService, Producto } from '../../services/productos.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html'
})
export class ResultComponent implements OnInit {
  productos: Producto[] = [];
  termino:string;

  constructor(private activatedRoute: ActivatedRoute,
              private _heroesService: ProductosService,
              private router : Router) {

    this.activatedRoute.params.subscribe(params =>{ 
      this.termino = params['termino'];});
               }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params =>{      
        this.productos = this._heroesService.buscarProducto(params['termino']);
    });
  }



}
