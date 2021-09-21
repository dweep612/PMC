import { Component } from '@angular/core';
import { ProductService } from './products/product.service';

@Component({
  selector: 'pm-root',
  template: `
    <div>
      <nav class="navbar navbar-expand navbar-light bg-light">
        <a class="navbar-brand">{{ pageTitle }}</a>
        <ul class="nav nav-pills">
          <li>
            <a class="nav-link" routerLinkActive="active" routerLink="/welcome"
              >Home</a
            >
          </li>
          <li>
            <a class="nav-link" routerLinkActive="active" routerLink="/products"
              >Product List</a
            >
          </li>
        </ul>
      </nav>
    </div>
    <div class="container">
      <router-outlet></router-outlet>
    </div>
  `,
  providers: [ProductService],
})
export class AppComponent {
  pageTitle: string = 'Acme Product Management';
}
