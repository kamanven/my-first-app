import { NgModule } from "@angular/core";
import { Routes,RouterModule } from "@angular/router";
import { RecipesComponent } from "src/app/recipes/recipes.component";
import { ShoppingListComponent } from "src/app/shopping-list/shopping-list.component";
import { RecipeDetailComponent } from "src/app/recipes/recipe-detail/recipe-detail.component";
import { RecipeStartComponent } from "src/app/recipes/recipe-start/recipe-start.component";
import { RecipeEditComponent } from "src/app/recipes/recipe-edit/recipe-edit.component";


const appRoutes: Routes = [
    { path: '', redirectTo:'recipes', pathMatch:'full'},
    { path: 'recipes', component:RecipesComponent, children:[
        {path:'', component: RecipeStartComponent},
        {path:'new',component: RecipeEditComponent},
        {path:':name', component: RecipeDetailComponent},
        {path:':name/edit', component: RecipeEditComponent}
    ]},
    { path: 'Shopping-List', component: ShoppingListComponent},
    { path: 'Shopping-List/:id', component: ShoppingListComponent},
    {path:'**', redirectTo:'recipes'}
  ];

@NgModule({
imports:[RouterModule.forRoot(appRoutes)],
exports:[RouterModule]
})
  
export class RouteShoppingModule
{

}