import {Component, Input, OnInit} from '@angular/core';
import {FisCoffee} from '../fis-coffee';

@Component({
  selector: 'app-coffee-details',
  templateUrl: './coffee-details.component.html',
  styleUrls: ['./coffee-details.component.scss']
})
export class CoffeeDetailsComponent implements OnInit {


  @Input() selectedCoffee: FisCoffee;

  constructor() { }

  ngOnInit() {
  }

}
