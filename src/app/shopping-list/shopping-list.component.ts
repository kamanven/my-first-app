import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingService } from 'src/app/shopping-list/shopping.sevice';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  id: number;
ingredients : Ingredient[]= null;
  constructor(private shoppService:ShoppingService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.ingredients = this.shoppService.getIngredients();
    this.id = this.route.snapshot.params['id'];
  }

  ingredientSelected(index: number){
    this.shoppService.selectedIngredient.emit(index);
  }

}
