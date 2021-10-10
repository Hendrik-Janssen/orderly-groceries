import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { GroceryListComponent } from "./grocery-list.component";
import { GroceryListService } from "./grocery-list.service";

@NgModule({
    imports: [
        NgbModule,
        CommonModule,
        FormsModule
    ],
    providers: [
        GroceryListService
    ],
    declarations: [
        GroceryListComponent
    ]
})
export class GroceryListModule {}