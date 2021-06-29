import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipes.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  
  @Input() recipe : Recipe;
  constructor(private recipeServ : RecipeService) { 
    
   }

  ngOnInit(): void {
  }
  onRecipeClick(){
    this.recipeServ.recipeSelected.emit(this.recipe);
  }
  
}
