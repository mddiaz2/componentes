import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  public name: string = 'Hulk';
  public age: number = 25;

  get capitalizedName (): string {
    return this.name.toUpperCase();
  }

  getHeroDescription():string{
    return `${this.name} - ${this.age}`;
  }

  changeHero():void{
    this.name = 'Thor';
  }
  changeAge(): void{
    this.age = 15;
  }
  resetForm(): void{
    this.name = 'Hulk';
    this.age = 25;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
