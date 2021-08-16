import { Component, OnInit } from "@angular/core";
import { FormArray, FormControl, FormGroup } from "@angular/forms";
import { ActivatedRoute, ActivationEnd } from "@angular/router";
import { RecipeService } from "../recipes.service";

@Component({
  selector: "app-recipe-edit",
  templateUrl: "./recipe-edit.component.html",
  styleUrls: ["./recipe-edit.component.css"],
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;
  recipeForm: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private recipeSrv: RecipeService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = +params["id"];
      if (params["id"] != null || params["id"] != undefined)
        this.editMode = true;
      this.initForm();
    });
  }
  private initForm() {
    let recipeName = "";
    let recipeDesc = "";
    let recipeUrl = "";
    let recipeIngre = new FormArray([]);
    if (this.editMode) {
      let recipe = this.recipeSrv.getRecipeFromIndex(this.id);
      recipeName = recipe.name;
      recipeDesc = recipe.description;
      recipeUrl = recipe.imagePath;
      if(recipe['ingredients'])
      {
        for(let ingre of recipe.ingredients)
          {
            recipeIngre.push(
              new FormGroup({
                name: new FormControl(ingre.name),
                amount: new FormControl(ingre.amount),
                unit: new FormControl(ingre.unit),
              })
            );
          }
      }
    }
    this.recipeForm = new FormGroup({
      name: new FormControl(recipeName),
      description: new FormControl(recipeDesc),
      imagePath: new FormControl(recipeUrl),
      ingredients : recipeIngre, 
    });
  }
  onSubmit()
  {
    console.log(this.recipeForm);
  }
}
