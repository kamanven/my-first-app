import { Component } from "@angular/core";
import { OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { Params } from "@angular/router";
import { RecipeService } from "src/app/recipes/recipe.service";
import { Recipe } from "src/app/recipes/recipe.model";
import { FormControl } from "@angular/forms";
import { FormArray } from "@angular/forms";
import { Validator } from "@angular/forms";
import { Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
    selector:"app-recipe-edit",
    templateUrl:"./recipe-edit.component.html"
})
export class RecipeEditComponent implements OnInit
{
    currentRecipeID: string;
    isEditMode = false;
constructor(private route:ActivatedRoute, private router: Router, private recipeserv:RecipeService){}
    recipeForm: FormGroup;
    ngOnInit(){
        this.route.params.subscribe(
            (params:Params)=>{ 
                this.currentRecipeID = params['name'];   
                if(this.currentRecipeID != "")         
                this.isEditMode = true;    
                this.initForm();      
        }
        );

    }
     addNewIngredient(){
        (<FormArray>this.recipeForm.get('ingredients')).push(new FormGroup({
            name: new FormControl(),
            amount: new FormControl()
        }));
    }

    OnSubmit(){
            if(this.isEditMode)
                this.recipeserv.updateRecipe(this.currentRecipeID,this.recipeForm.value);
            else
            this.recipeserv.addRecipe(this.recipeForm.value);
            this.onCancel();
    }
    onCancel(){
        this.router.navigate(['../'], {relativeTo: this.route});
    }

    onIngredientCancel(index: number){
        (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
    }
    private initForm(){
            let recipe:Recipe = new Recipe("","","",[]);
            let ingArray = new FormArray([]);
            if(this.isEditMode) 
            {
                recipe = this.recipeserv.getSingleRecipe(this.currentRecipeID);
                if(recipe.ingredients)
                {
                    for(let ingred of recipe.ingredients)
                    {
                        ingArray.push( new FormGroup({
                            name: new FormControl(ingred.name,Validators.required),
                            amount: new FormControl(ingred.amount,[Validators.required])
                        })) 
                    }
                }
            }
            this.recipeForm = new FormGroup({
                name: new FormControl(recipe.name,Validators.required),
                imagePath: new FormControl(recipe.imagePath,Validators.required),
                description: new FormControl(recipe.description,Validators.required),
                ingredients : ingArray
                });

                console.log(this.recipeForm);
            }

} 