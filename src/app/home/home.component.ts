import { Component } from '@angular/core';
import { MenuService } from '../menu.service';
import { Menu } from 'src/app/Menu';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

     
      export class HomeComponent {
        menus:Menu[] = [];
        constructor(private ms: MenuService){ 
            this.ms.getMenu().subscribe({
            next : (data)=> this.menus=data.filter((m)=>m.approved==false) 
              })
        }
         
     
    }
    

