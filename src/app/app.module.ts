import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


//Rutas
import { APP_ROUTING } from './app.routes';

//Servicios
import { ProductosService } from './services/productos.service';

//Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ProductoComponent } from './components/producto/producto.component';
import { ResultComponent } from './components/result/result.component';
import { CardComponent } from './components/card/card.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InicioComponent,
    ContactoComponent,
    ProductosComponent,
    ProductoComponent,
    ResultComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [ProductosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
