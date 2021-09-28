import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredients } from "../shared/ingredients.model";
import { ShoppingListService } from "../shoping-list/shoping-list.service";
import { Recipe } from "./recipe.model"; 

@Injectable()
export class RecipeService {
  constructor(private slServ: ShoppingListService) {}
  public recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      "Allu Sabzi",
      "Aloo ki sabji, also refered to as aloo tamatar ki sabzi ",
      "https://www.greedygourmet.com/wp-content/uploads/2018/10/alookisabji.jpg",
      [
        new Ingredients("Allu", 5, "pc"),
        new Ingredients("Salt", 2, "tsp"),
        new Ingredients("Water", 200, "ml"),
      ]
    ),
    new Recipe(
      "Test Recipe No-2",
      "This recipe is for the test purpose",
      "https://c.pxhere.com/images/45/e8/97d46a089d87a53cdcab75006a29-1613433.jpg!d",
      [
        new Ingredients("Allu", 5, "pc"),
        new Ingredients("Salt", 2, "tsp"),
        new Ingredients("Water", 200, "ml"),
      ]
    ),
  ];
  recipeChanged = new Subject<Recipe[]>();
  getRecipes() {
    return this.recipes.slice();
  }
  addIngdToShoping(ingr: Ingredients[]) {
    this.slServ.addListIngre(ingr);
  }
  getRecipeFromIndex(index: number) {
    return this.recipes[index];
  }
  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipeChanged.next(this.recipes.slice());
  }
  updateRecipe(index: number, recipe: Recipe) {
    this.recipes[index] = recipe;
    this.recipeChanged.next(this.recipes.slice());
  }
  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipeChanged.next(this.recipes.slice());
   }

}