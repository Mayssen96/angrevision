import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.component.html',
  styleUrls: ['./add-menu.component.css']
})
export class AddMenuComponent {
  constructor (private ms :MenuService){
  }
  menu :FormGroup = new FormGroup({
  title: new FormControl('', [Validators.required,Validators.pattern('[A-Z]+[a-zA-Z0-9]*')]),
  image: new FormControl(),
  description: new FormControl('',[Validators.required,Validators.minLength(10)]), 
}
  )

addmenu(){
this.ms.addMenu(this.menu.value).subscribe();
}




}
