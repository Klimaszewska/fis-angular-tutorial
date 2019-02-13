import { Component, OnInit } from '@angular/core';
import {FisCoffee} from '../fis-coffee';
import {FISCOFFEE} from '../fis-mock-repo';

@Component({
  selector: 'app-coffee',
  templateUrl: './coffee.component.html',
  styleUrls: ['./coffee.component.scss']
})
export class CoffeeComponent implements OnInit {

  coffee: FisCoffee;

  fisCoffeeTypes = FISCOFFEE;

  constructor() { }

  ngOnInit() {
  }

}
