import { Component, OnInit } from '@angular/core';
import {Product} from '../Product';
import {data} from '../MockData';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products = data;
  selected: Product;
  constructor() { }

  ngOnInit(): void {
  }
// product: Product ={
// id:1,
// name:'product 1',
// price: 22.22,
// desc: 'hello',
// // status: false,
// // img: 'http://placehold.it/700x400'
// }

// 

}
