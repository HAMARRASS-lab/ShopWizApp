import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe!: Recipe;
  @Output() recipeSelected=new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
   
  }

  onSelected(){
   this.recipeSelected.emit();
  }

}
