import { Ingredient } from "src/app/shared/ingredient.model";
import { OnInit } from "@angular/core";
import { EventEmitter } from "@angular/core";

export class ShoppingService implements OnInit
{
    selectedIngredient = new EventEmitter<number>();
    private ingredients : Ingredient[]=[
        new Ingredient("Apple",5),
        new Ingredient("tomatoes", 5)
      ];

      ngOnInit(){

      }

      getIngredients(){
          return this.ingredients;
      }
      getIngredientsByNumber(index: number){
        return this.ingredients[index];
      }
      addIngredients(ing:Ingredient)
      {
        this.ingredients.push(ing);
      }
 updateIngredient(index: number, updtIngredient: Ingredient){
     this.ingredients[index].amount = updtIngredient.amount;
     this.ingredients[index].name = updtIngredient.name;
 }
deleteIngredient(index: number){
    this.ingredients.splice(index,1);
}

}