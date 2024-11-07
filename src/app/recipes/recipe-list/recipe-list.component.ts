import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit{

  @Output() recipeWasSelected=new EventEmitter<Recipe>();
  recipes: Recipe[]=[
    new Recipe('A test recipe', 'this is the first desc', 'https://www.corriecooks.com/wp-content/uploads/2022/01/Instant-Pot-Recipes.jpg'),
    new Recipe('A test recipe', 'this is the first desc hamza doukani', 'https://www.corriecooks.com/wp-content/uploads/2022/01/Instant-Pot-Recipes.jpg')
  ];

  constructor(){ }

  ngOnInit(): void {
   
  }
  onRecipeSelected(recipe:Recipe){
  this.recipeWasSelected.emit(recipe)
  }

}
