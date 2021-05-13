import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { GroceryListComponent } from "./grocery-list.component";

@NgModule({
    imports: [
        NgbModule,
        CommonModule,
        FormsModule
    ],
    declarations: [
        GroceryListComponent
    ]
})
export class GroceryListModule {}