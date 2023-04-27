import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CmbnacionalidadComponent } from './cmbnacionalidad/cmbnacionalidad.component';

 ///Material
 import {MatFormFieldModule} from '@angular/material/form-field';
 import {MatSelectModule} from '@angular/material/select';
import { ContadorComponent } from './contador/contador.component';
import { HeroesComponent } from './hero/heroes/heroes.component';
import { ListComponent } from './hero/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    CmbnacionalidadComponent,
    ContadorComponent,
    HeroesComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatSelectModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
