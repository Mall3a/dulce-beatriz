import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ProductoComponent } from './components/producto/producto.component';
import { ResultComponent } from './components/result/result.component';

const APP_ROUTES: Routes = [
    { path: 'inicio', component: InicioComponent },
    { path: 'contacto', component: ContactoComponent },
    { path: 'productos', component: ProductosComponent },
    { path: 'producto/:id', component: ProductoComponent },
    { path: 'result/:termino', component: ResultComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'inicio' },

];


export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
