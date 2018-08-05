import { Component, OnInit, ElementRef } from '@angular/core';
import { ViewChild } from '@angular/core';
import { ShoppingService } from 'src/app/shopping-list/shopping.sevice';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
@ViewChild('nameInput') nameInput:ElementRef;
@ViewChild('amountInput') amountInput:ElementRef;
selectedIngredient: Ingredient;
selectedIngredientIndex:  number = -1;

shoppingForm : FormGroup ;
  constructor(private shopServ:ShoppingService ) { }

  ngOnInit() {
    this.shoppingForm = new FormGroup({
      name : new FormControl(null,Validators.required) ,
      amount :new FormControl(null,[Validators.required])  
    });
    this.shopServ.selectedIngredient.subscribe(
      (index:number)=>{
        this.selectedIngredientIndex = index;
          this.selectedIngredient = this.shopServ.getIngredientsByNumber(index);
          this.shoppingForm.setValue({
            name: this.selectedIngredient.name,
            amount: this.selectedIngredient.amount
          });
      }
    );
  }

  onAddItem()
  {
    console.log(this.shoppingForm);
    let name:string = this.shoppingForm.get("name").value;
    let amount:number = this.shoppingForm.get("amount").value;
    if(this.selectedIngredientIndex > -1)
    {
        this.shopServ.updateIngredient(this.selectedIngredientIndex,new Ingredient(name,amount));
        this.shoppingForm.reset();
    }
    else
        this.shopServ.addIngredients(new Ingredient(name,amount));
    this.selectedIngredientIndex =-1;
  }

  onClear(){
    this.shoppingForm.reset();
    this.selectedIngredientIndex =-1;
  }
  onDelete(){
    this.shopServ.deleteIngredient(this.selectedIngredientIndex);
    this.onClear();
  }
}
