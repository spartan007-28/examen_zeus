import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { pathToFileURL } from 'url';

@Injectable({
  providedIn: 'root'
})
export class RouteGuard implements CanActivate {

  constructor( private router: Router, private activatedRote: ActivatedRoute ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      const urlValue = Object.keys(route.url).length === 0;

      if (urlValue === true) {
        this.router.navigateByUrl('/Inicio');
      } else {
        return true;
      }

  }
}
