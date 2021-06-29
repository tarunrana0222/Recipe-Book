import { Component,  OnInit } from '@angular/core';
import { Ingredients } from 'src/app/shared/ingredients.model';
import { ShoppingListService } from '../shoping-list.service';

@Component({
  selector: 'app-shoping-edit',
  templateUrl: './shoping-edit.component.html',
  styleUrls: ['./shoping-edit.component.css']
})
export class ShopingEditComponent implements OnInit {
  constructor(private shopingListServ: ShoppingListService) { }

  ngOnInit(): void {
  }
  onAdd(name : string, amnt : any, unit : string){
    const ing = new Ingredients(name,parseInt(amnt),unit);
    this.shopingListServ.addIngre(ing);
  }
}
