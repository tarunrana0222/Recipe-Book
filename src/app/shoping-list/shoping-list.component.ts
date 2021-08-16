import { Component, OnInit } from '@angular/core';
import { Ingredients } from '../shared/ingredients.model';
import { ShoppingListService } from './shoping-list.service';

@Component({
  selector: "app-shoping-list",
  templateUrl: "./shoping-list.component.html",
  styleUrls: ["./shoping-list.component.css"],
})
export class ShopingListComponent implements OnInit {
  ingredients: Ingredients[];
  constructor(private shopingServ: ShoppingListService) {
    this.ingredients = this.shopingServ.getIngre();
  }

  ngOnInit(): void {
    this.shopingServ.newIngr.subscribe((ingr: Ingredients[]) => {
      this.ingredients = ingr;
    });
  }
  onEditItem(i: number) {
    this.shopingServ.statedEditing.next(i);
  }
}
