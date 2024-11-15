import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "../recipe.model";
import { Ingredient } from "src/app/shared/ingredient.model";
import { ShoppingListService } from "src/app/shopping-list/shopping-list.service";

@Injectable()
export class RecipeService{
 
  recipeSelected = new EventEmitter<Recipe>();
    
    private recipes: Recipe[]=[
        new Recipe(
          'A test recipe',
          'this is the first desc', 
          'https://www.corriecooks.com/wp-content/uploads/2022/01/Instant-Pot-Recipes.jpg',
          [
            new Ingredient('t7mira', 12),
            new Ingredient('bzar',20)
          ]
        ),
        new Recipe(
          'A test recipe',
           'this is the first desc hamza doukani',
            'https://www.corriecooks.com/wp-content/uploads/2022/01/Instant-Pot-Recipes.jpg',
          [
            new Ingredient('Camone', 12),
            new Ingredient('Qarfa',1)
          ]
          ),
      ];

     constructor(private slService:  ShoppingListService){}
    
     getRecipes(){
        return this.recipes.slice();
      }

      getRecipe(index: number){
        return this.recipes[index];
      }
      addIngredientsToShoppingList(ingredients: Ingredient[]){
         this.slService.addIngredients(ingredients);
      }
}