import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/recipes/recipe.model';
import { Input } from '@angular/core';
import { ShoppingService } from 'src/app/shopping-list/shopping.sevice';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from 'src/app/recipes/recipe.service';
import { Params } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipeElement:Recipe;
  constructor(private shopServ: ShoppingService, private recipeServ: RecipeService, 
    private route: ActivatedRoute, private router:Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (param:Params) =>
      { 
        this.recipeElement = this.recipeServ.getSingleRecipe(this.route.snapshot.params['name'])
      }
    );
    
  }

  editRecipeClicked() {
    this.router.navigate(['/recipes',this.recipeElement.name,'edit'], {relativeTo: this.route});
        }
  addToShoppingList()
  {
    for( let ing of this.recipeElement.ingredients)
    this.shopServ.addIngredients(ing);
  }
  deleteRecipeClicked()
  {
    this.recipeServ.deleteRecipe(this.recipeElement.name);
  }
}
