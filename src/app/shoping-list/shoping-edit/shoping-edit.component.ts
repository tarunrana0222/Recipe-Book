import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Ingredients } from 'src/app/shared/ingredients.model';

@Component({
  selector: 'app-shoping-edit',
  templateUrl: './shoping-edit.component.html',
  styleUrls: ['./shoping-edit.component.css']
})
export class ShopingEditComponent implements OnInit {
  @Output() ingredients = new EventEmitter<Ingredients>();
  constructor() { }

  ngOnInit(): void {
  }
  onAdd(name : string, amnt : any, unit : string){
    const ing = new Ingredients(name,parseInt(amnt),unit);
    this.ingredients.emit(ing);
  }
}
