import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/recipes/recipe.model';
import { Input } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { RecipeService } from 'src/app/recipes/recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() currentSelectedrecipe:Recipe;
  constructor(private recpservice:RecipeService) { }

  ngOnInit() {
  }

  recipeWasSelected()
  {
this.recpservice.recipeSelected.emit(this.currentSelectedrecipe);
console.log("event emitted"+this.currentSelectedrecipe.name);
  }
}
