import {Injectable, OnInit} from '@angular/core';
import {FisCoffee} from './fis-coffee';
import {Observable, of} from 'rxjs';
import {FISCOFFEE} from './fis-mock-repo';

@Injectable({
  providedIn: 'root'
})
export class CoffeeService  {

  fisCoffeeTypes;

  constructor() {
    this.fisCoffeeTypes = FISCOFFEE;
  }

  getCoffeeTypes(): Observable <FisCoffee[]> {
    return of(FISCOFFEE);
  }

  addCoffee(name: string, description: string): FisCoffee {
    const coffee = new FisCoffee();
    coffee.id = this.generateId();
    coffee.name = name;
    coffee.description = description;
    return coffee;
  }

  generateId(): number {
    return Math.floor(Math.random() * (1000 - 17 + 1)) + 17;
  }
}
