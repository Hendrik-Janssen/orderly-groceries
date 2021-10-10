import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GroceryListComponent } from "./grocery-list.component";

const routes: Routes = [
    {
        path: '',
        component: GroceryListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GroceryListRoutingModule {}