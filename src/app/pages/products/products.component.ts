import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../shared/services/products.service';
import { ActivatedRoute } from '@angular/router';
import Product from '../../shared/models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];

  constructor(private readonly productsService: ProductsService, private readonly activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productsService.getAll().subscribe((res) => {
      this.products = res;
    });
  }

  onAdd() {

  }

  onEdit(product: Product) {

  }

  onDelete(product: Product) {

  }
}
