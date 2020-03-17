import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productList = [];
  constructor() { }

  getProduct() {
    this.productList = [
      { id: 1, name: 'Parle-G' },
      { id: 2, name: 'Ponds' },
      { id: 3, name: 'Dove' },
      { id: 4, name: 'Fortune Oil' },
    ];
    return this.productList;
  }
}
