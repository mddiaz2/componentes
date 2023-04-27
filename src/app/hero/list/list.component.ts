import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public heroNames: string[]= ['Spiderman', 'Ironman', 'Hulk', 'She Hulk', 'Thor'];

  constructor() { }

  ngOnInit(): void {
  }

}
