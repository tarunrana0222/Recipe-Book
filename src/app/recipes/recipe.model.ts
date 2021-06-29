import { Ingredients } from "../shared/ingredients.model";

export class Recipe {
    public name:string;
    public description:string;
    public imagePath:string;
    public ingredients : Ingredients[]

    constructor(name:string, decs:string, imagePath:string, ingredients : Ingredients[])
    {
        this.name = name;
        this.description = decs;
        this.imagePath = imagePath;
        this.ingredients = ingredients
    }
}