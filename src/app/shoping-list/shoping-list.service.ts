import { EventEmitter } from "@angular/core";
import { Ingredients } from "../shared/ingredients.model";

export class ShoppingListService{
   public newIngr = new EventEmitter<Ingredients[]>();
   private ingredients : Ingredients[] =[
        new Ingredients('Salt',100, 'g'),
        new Ingredients('Rice',500, 'g'),
      ];

    getIngre()
    {
        return this.ingredients.slice();
    }  

    addIngre(ingre : Ingredients)
    {
        this.ingredients.push(ingre);
        this.newIngr.emit(this.ingredients.slice());
    }

    addListIngre(ing : Ingredients[])
    {
        this.ingredients.push(...ing);
        this.newIngr.emit(this.ingredients.slice());
    }
}