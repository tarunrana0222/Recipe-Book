import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeSelected = new EventEmitter<Recipe>();
  recipes : Recipe[] = [
    new Recipe('Test Recipe','This recipe is for the test purpose','https://c.pxhere.com/images/45/e8/97d46a089d87a53cdcab75006a29-1613433.jpg!d'),
    new Recipe('Test Recipe No-2','This recipe is for the test purpose','https://c.pxhere.com/images/45/e8/97d46a089d87a53cdcab75006a29-1613433.jpg!d'),

  ];
  constructor() { }

  ngOnInit(): void {
  }
  onRecipeClick(recipe : Recipe){
    this.recipeSelected.emit(recipe);
  }

}
