import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product/product.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  productList = [];
  product = {};
  id: number;
  constructor(private productService: ProductService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.productList = this.productService.getProduct();
    this.id = +this.route.snapshot.paramMap.get('id');
    this.product = this.productList.find(p => p.id === this.id);
  }


}
