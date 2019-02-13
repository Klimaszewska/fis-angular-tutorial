import { Component, OnInit } from '@angular/core';
import {FisCoffee} from '../fis-coffee';
import {FISCOFFEE} from '../fis-mock-repo';

@Component({
  selector: 'app-coffee',
  templateUrl: './coffee.component.html',
  styleUrls: ['./coffee.component.scss']
})
export class CoffeeComponent implements OnInit {

  selectedCoffee: FisCoffee;

  fisCoffeeTypes;

  constructor() { }

  ngOnInit() {
    this.fisCoffeeTypes = FISCOFFEE;
  }

  onSelect(coffee: FisCoffee): void {
    this.selectedCoffee = coffee;
  }

  onSubmit(name: string, description: string): void {
    const coffee = new FisCoffee();
    coffee.id = this.generateId();
    coffee.name = name;
    coffee.description = description;
    this.fisCoffeeTypes.push(coffee);
  }

  generateId(): number {
    return this.fisCoffeeTypes.length + 1;
  }
}
