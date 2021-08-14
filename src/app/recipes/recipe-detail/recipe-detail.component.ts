import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipeDetail : Recipe;
  id:number;
  constructor(private recipeSrv : RecipeService,
    private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params)=>{
      this.id = +params['id'];
      this.recipeDetail = this.recipeSrv.getRecipeFromIndex(this.id);
    });
  }
  onAddShoping()
  {
    this.recipeSrv.addIngdToShoping(this.recipeDetail.ingredients);
  }

}
