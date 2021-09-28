import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    private route: ActivatedRoute,
  private router : Router) { }

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
  deleteRecipe() {
    this.recipeSrv.deleteRecipe(this.id);
    this.router.navigate(["../"], {relativeTo : this.route})  }
}
