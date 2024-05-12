import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Menu } from './Menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http: HttpClient) { 

  }

  addMenu(menu: Menu) {
    return this.http.post("http://localhost:3000/menu",menu);
  }
  getMenu(){
    return this.http.get<Menu[]>("http://localhost:3000/menu");
  }
}

