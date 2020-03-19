import { Component, OnInit } from '@angular/core';
import {Product} from '../Product';
import {data} from '../MockData';

@Component({
  selector: 'app-product-manager',
  templateUrl: './product-manager.component.html',
  styleUrls: ['./product-manager.component.css']
})
export class ProductManagerComponent implements OnInit {
  products = data;
  selected: Product;
  constructor() { }

  ngOnInit(): void {
  }
  detailProduct(product){

    this.selected = product;
   console.log(this.selected)
   
   }
   removeItem(id){
     return this.products = this.products.filter(product => product.id != id);
   }

}
