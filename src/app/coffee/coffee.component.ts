import { Component, OnInit } from '@angular/core';
import {FisCoffee} from '../fis-coffee';
import {FISCOFFEE} from '../fis-mock-repo';
import {CoffeeService} from '../coffee.service';


@Component({
  selector: 'app-coffee',
  templateUrl: './coffee.component.html',
  styleUrls: ['./coffee.component.scss']
})
export class CoffeeComponent implements OnInit {

  selectedCoffee: FisCoffee;

  fisCoffeeTypes;

  constructor(private coffeeService: CoffeeService) { }

  ngOnInit() {
    this.coffeeService.getCoffeeTypes().subscribe(coffeeTypes => this.fisCoffeeTypes = coffeeTypes);
  }

  onSelect(coffee: FisCoffee): void {
    this.selectedCoffee = coffee;
  }

  onSubmit(name: string, description: string): void {
    this.coffeeService.addCoffee(name, description);
  }
}
