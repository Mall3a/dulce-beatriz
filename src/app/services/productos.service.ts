import { Injectable } from '@angular/core';

@Injectable()
export class ProductosService {

  private productos: Producto[] = [
    {
      id:0,
      nombre: "Pasteles Clásicos",
      descripcion: "Pasteles tradicionales de varios sabores",
      img: "assets/img/kuchen_nuez.png",
      detalle:[{ personas: 8, valor: 10000},
              { personas: 15, valor: 17000},
              { personas: 20, valor: 20000},
              { personas: 30, valor: 25000},
              { personas: 40, valor: 35000}],
     tipos: [{nombre:"Bizcocho",
            variedades: ["Piña", "Manjar Durazno", "Crema Chocolate", "Crema Lúcuma"]},
             {nombre:"Panqueque",
             variedades: ["Chocolate Manjar", "Chocolate Frambuesa", "Manjar Frambuesa", "Naranja"]},
             {nombre:"Otras",
             variedades: ["Selva Negra", "Tres Leches", "Cuatro Leches"]}]},

  {  id:1,
      nombre: "Pasteles Especiales",
      descripcion: "Pasteles especiales de varios sabores",
      img: "assets/img/torta_humeda.png",
      detalle:[{ personas: 8, 
        valor: 12000},  
        { personas: 15, 
        valor: 20000},
        { personas: 20, 
        valor: 23000},
        { personas: 30, 
        valor: 28000},
        { personas: 40, 
        valor: 38000}],
      tipos: [{nombre:"Panqueques",
            variedades: ["Limón Coco", "Trufa Guinda", "Trufa Mazapán", "Manjar Nuez", "Moka Trufa", "Mousse Choco Blanco Frambuesa"]},
              {nombre:"Tres Leches",
              variedades: ["Chocolate", "Frambuesa"]},
              {nombre:"Merengue",
              variedades: ["Lúcuma", "Frambuesa"]},
              {nombre:"Bizcocho",
              variedades: ["Manjar Trufa"]}
            ]
  },
  {  id:2,
    nombre: "Pasteles Decorados",
    descripcion: "Pasteles decorados de varios sabores",
    img: "assets/img/cheesecake.png",
    detalle:[{ personas: 8, 
      valor: 15000},  
      { personas: 15, 
      valor: 30000},
      { personas: 20, 
      valor: 33000},
      { personas: 30, 
      valor: 38000},
      { personas: 40, 
      valor: 48000}],
    tipos: []
},

{  id:3,
  nombre: "Postres",
  descripcion: "Postres de varios sabores",
  img: "assets/img/cupcake.png",
  detalle:[{ personas: 15, 
    valor: 17000},  
    { personas: 20, 
    valor: 20000}],
  tipos: [{nombre:"Cheesecake",
        variedades: []},
          {nombre:"Mousse",
          variedades: ["Chocolate Bizcocho", "Lúcuma Merengue", "Frambuesa Merengue", "Limón Coco", "Chocolate Blanco Frambuesa Bizcocho"]},
          ]
},
{  id:4,
  nombre: "Cocktail Dulce",
  descripcion: "Cocktail de varios tipos",
  img: "assets/img/queque_marmolado.png",
  detalle:[{ personas: null, valor: 6000, cantidad: "1/2 kilo", producto:"Finas Galletas de Mantequilla"},  
  { personas: null, valor: 7800, cantidad: "1/2 kilo", producto:"Bombones Surtidos"},
  { personas: null, valor: 7000, cantidad: "30 unidades", producto:"Mini Cupcakes"},
  { personas: null, valor: 7500, cantidad: "12 unidades", producto:"Cupcakes simples"},
  { personas: null, valor: 8700, cantidad: "12 unidades", producto:"Cupcakes rellenos"},
  { personas: null, valor: 7800, cantidad: "30 unidades", producto:"Mini Pastelitos Surtidos"},
            ],
              tipos: [{nombre:"Mini Pastelitos Surtidos",
              variedades: ["Pie de limón","Tarta de trufa", "Mini Alfajor", "Brazo de Reina", "Torta Panqueque"]}]
            },
              ];

    

    constructor(){

    }

    getProductos(): Producto[]{
      return this.productos;
    }
    getProducto(idx: string){
      return this.productos[idx];
    }
    
    buscarProducto(termino:string) : Producto[]{
      let productosArray: Producto[] = [];
      termino = termino.toLowerCase();
      for(let producto of this.productos) {
        let nombre = producto.nombre.toLowerCase();
        if(nombre.indexOf(termino) >= 0){
          productosArray.push(producto);
        }
      }
      return productosArray;
    }



}

export interface Producto {
  id: number;
  nombre: string;
  descripcion: string;
  img: string;
  detalle: Detalle[];
  tipos: Tipos[];
}

export interface Detalle{
  personas:number;
  valor:number;
  cantidad?:string;
  producto?:string;
}

export interface Tipos{
  nombre:string;
  variedades:string[];
}