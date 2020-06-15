import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DataHousesService } from '../services/data-houses.service';

@Injectable({
  providedIn: 'root'
})
export class LoadeddataGuard implements CanActivate {
  path: ActivatedRouteSnapshot[];
  route: ActivatedRouteSnapshot;

  constructor(private dataService: DataHousesService, private router: Router) {}

  /* Protect url */
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if(window.location.pathname == "/" || window.location.pathname == "books" ||this.dataService.element){
      return true
    } else{
      this.router.navigate(["/"])
    }
  }
}

