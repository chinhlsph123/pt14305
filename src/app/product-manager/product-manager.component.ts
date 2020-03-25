import { Component, OnInit } from '@angular/core';
import {Product} from '../Product';
import {data} from '../MockData';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-manager',
  templateUrl: './product-manager.component.html',
  styleUrls: ['./product-manager.component.css']
})
export class ProductManagerComponent implements OnInit {
  products = data;
  selected: Product;
  constructor(
        private productService: ProductService
  ) { }

  ngOnInit(): void {
        this.getProducts();
  }
  // detailProduct(product){

  //   this.selected = product;
  //  console.log(this.selected)
   
  //  }
  //  removeItem(id){
  //    return this.products = this.products.filter(product => product.id != id);
  //  }
  getProducts(){
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    })
    // this.products = this.productService.getProducts();
  }
}
