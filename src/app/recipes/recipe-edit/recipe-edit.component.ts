import { Component, OnInit } from "@angular/core";
import { FormArray, FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, ActivationEnd, Router } from "@angular/router";
import { RecipeService } from "../recipes.service";
import { Recipe } from "../recipe.model";

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
    private recipeSrv: RecipeService,
    private router : Router
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
                name: new FormControl(ingre.name,Validators.required),
                amount: new FormControl(ingre.amount,[Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)]),
                unit: new FormControl(ingre.unit,Validators.required),
              })
            );
          }
      }
    }
    this.recipeForm = new FormGroup({
      name: new FormControl(recipeName,Validators.required),
      description: new FormControl(recipeDesc,Validators.required),
      imagePath: new FormControl(recipeUrl,Validators.required),
      ingredients : recipeIngre, 
    });
  }
  onSubmit()
  {

    if (this.editMode) {
      this.recipeSrv.updateRecipe(this.id,this.recipeForm.value)
    }
    else {
      this.recipeSrv.addRecipe(this.recipeForm.value);
    }

    this.onCancel();
  }
  getControl() {
    return (this.recipeForm.get('ingredients') as FormArray).controls;
  }
  onAddIngredient() {
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        name: new FormControl(null,Validators.required),
        amount: new FormControl(null,[Validators.required ,Validators.pattern(/^[1-9]+[0-9]*$/) ]),
        unit: new FormControl(null,Validators.required),
     })
    )
  }
  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }
  onDeleteIngre(i : number) {
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(i);
  }
}
