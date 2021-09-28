import { Component,  OnDestroy,  OnInit} from '@angular/core';
import { Subscription } from 'rxjs';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipes.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit,OnDestroy {
  recipes: Recipe[];
  subs: Subscription;
  constructor(
    private recipeServ : RecipeService,
  ) { }

  ngOnInit(): void {
      this.recipes = this.recipeServ.getRecipes();
     this.subs = this.recipeServ.recipeChanged.subscribe(
      res => {
        this.recipes = res;
      }
    )
  }
  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
