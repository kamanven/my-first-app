import {Recipe} from './recipe.model';
import { EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
export class RecipeService
{
    recipeSelected = new EventEmitter<Recipe>();
    private recipesList: Recipe []= [
        new Recipe('Sneakers1','tesing recipe','file:///C:/Users/kamanven/Desktop/Images/SN1.jpg',
        [ new Ingredient('meat', 2),new Ingredient('mayonesse', 2)]),
        new Recipe('Sneakers2','tesing recipe','file:///C:/Users/kamanven/Desktop/Images/SN1.jpg',[]),
        new Recipe('Sneakers3','tesing recipe','file:///C:/Users/kamanven/Desktop/Images/SN1.jpg',[])
      
      ];
    constructor(){}

    getRecipes(){
        return this.recipesList.slice();
    }

    getSingleRecipe(name: string){
        return this.recipesList.find(q=>q.name === name);
    }

    addRecipe(newRecipe: Recipe){
            this.recipesList.push(newRecipe);
    }
    updateRecipe(id: string,newRecipe: Recipe){
        let  oldRecipe: Recipe = null;
        oldRecipe = this.recipesList.find(q=>q.name === id);
        oldRecipe.description= newRecipe.description;
        oldRecipe.name= newRecipe.name;
        oldRecipe.imagePath= newRecipe.imagePath;
        oldRecipe.ingredients= newRecipe.ingredients;
    }
    deleteRecipe(id: string){
        let index:number = this.recipesList.findIndex(q=>q.name === id)
        this.recipesList.splice(index,1);
    }
}