import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  templateUrl: './product-detail.component.html',
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product Detail';
  product: IProduct | undefined;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _productService: ProductService
  ) {}

  ngOnInit() {
    let id = Number(this._route.snapshot.paramMap.get('id'));
    this.pageTitle += `: ${id}`;
    if (id) {
      this.getProduct(id);
    }
  }

  getProduct(id: number): void {
    this._productService.getProduct(id).subscribe({
      next: (product) => (this.product = product),
      // error: (err) => (this.errorMessage = err),
    });
  }

  onBack(): void {
    this._router.navigate(['/products']);
  }
}
