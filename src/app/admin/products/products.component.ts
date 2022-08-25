import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];

  constructor(private productservice: ProductService) {}

  ngOnInit(): void {
    this.productservice.all().subscribe(
      products => {
      this.products = products;
    });
  }
}
