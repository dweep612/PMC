import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';

@Injectable()
export class ProductGuardService implements CanActivate {
  constructor(private _router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const id = Number(route.url[1].path);
    if (isNaN(id) || id < 1) {
      alert('Invalid product id');
      this._router.navigate(['/products']);
      return false;
    }
    return true;
  }
}
