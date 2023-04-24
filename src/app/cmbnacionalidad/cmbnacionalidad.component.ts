import { Component, OnInit } from '@angular/core';
import provincias from 'src/assets/json/provincias.json';
@Component({
  selector: 'app-cmbnacionalidad',
  templateUrl: './cmbnacionalidad.component.html',
  styleUrls: ['./cmbnacionalidad.component.css']
})
export class CmbnacionalidadComponent implements OnInit {
  Provincias: any = provincias;
 

  constructor() { }

  ngOnInit(): void {
  }

}
