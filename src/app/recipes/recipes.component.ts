import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/recipes/recipe.model';
import { RecipeService } from 'src/app/recipes/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
recipeElement:Recipe;
  constructor(private recpService:RecipeService) { }

  ngOnInit() {
    this.recpService.recipeSelected.subscribe( (eventdata:Recipe)=>
     this.recipeElement = eventdata

    );

  }
}
