import { Injectable } from "@angular/core";
import { data } from "./MockData";
import { Product } from "./Product";
@Injectable()
export class ProductService {
  products = data;
  selected: Product;
  constructor() {}

  getProducts() {
    return this.products;
  }
    getProduct(id){//du lieuj chi tiet
    return (this.products.find(x => x.id == id));
    
  }
  addProduct(product) {
    let newObj = { id: 6, ...product };
    this.products.push(newObj);
  }
  updateProduct(product) {
    return this.products.map(item => (item.id === product.id ? product : item));
  }
  removeItem(id) {
    return (this.products = this.products.filter(product => product.id != id));
    console.log(this.products);
  }
}
