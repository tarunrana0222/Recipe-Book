import { EventEmitter } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredients } from "../shared/ingredients.model";

export class ShoppingListService {
  public newIngr = new EventEmitter<Ingredients[]>();
  statedEditing = new Subject<number>();
  private ingredients: Ingredients[] = [
    new Ingredients("Salt", 100, "g"),
    new Ingredients("Rice", 500, "g"),
  ];

  getIngre() {
    return this.ingredients.slice();
  }
  getIngreFromIndex(i:number)
  {
    return this.ingredients[i];
  }

  addIngre(ingre: Ingredients) {
    this.ingredients.push(ingre);
    this.newIngr.emit(this.ingredients.slice());
  }

  addListIngre(ing: Ingredients[]) {
    this.ingredients.push(...ing);
    this.newIngr.emit(this.ingredients.slice());
  }
  updateIngre(index : number, newIngre : Ingredients)
  {
      this.ingredients[index] = newIngre;
      this.newIngr.emit(this.ingredients.slice());
  }
  deleteIngre(index:number)
  {
      this.ingredients.splice(index,1);
      this.newIngr.emit(this.ingredients.slice());
  }
}