import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/recipes/recipe.model';
import { RecipeService } from 'src/app/recipes/recipe.service';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
recipes: Recipe[];
  constructor(private recipeServ : RecipeService, private router: Router) { }

  ngOnInit() {
    this.recipes = this.recipeServ.getRecipes();
  }
  NewRecipeClicked()
  {
   this.router.navigate(['recipes/new']);
  }
}
