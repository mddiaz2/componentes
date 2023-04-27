import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {
  title = 'proyecto';
  public counter: number = 10;

  increaseBy(value: number): void {
    this.counter +=value;
  }
  reset():void{
    this.counter = 10;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
