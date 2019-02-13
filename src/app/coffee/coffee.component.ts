import { Component, OnInit } from '@angular/core';
import {FisCoffee} from '../fis-coffee';

@Component({
  selector: 'app-coffee',
  templateUrl: './coffee.component.html',
  styleUrls: ['./coffee.component.scss']
})
export class CoffeeComponent implements OnInit {

  coffee: FisCoffee;

  constructor() { }

  ngOnInit() {
  }

}
