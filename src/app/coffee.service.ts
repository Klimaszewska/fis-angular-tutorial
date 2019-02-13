import { Injectable } from '@angular/core';
import {FisCoffee} from './fis-coffee';
import {Observable, of} from 'rxjs';
import {FISCOFFEE} from './fis-mock-repo';

@Injectable({
  providedIn: 'root'
})
export class CoffeeService {

  fisCoffeeTypes: FisCoffee[];

  constructor() { }

  getCoffeeTypes(): Observable <FisCoffee[]> {
    return of(FISCOFFEE);
  }

  addCoffee(name: string, description: string): void {
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
