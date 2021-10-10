import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgControl, NgForm } from '@angular/forms';
import { Observable, ReplaySubject, Subject } from 'rxjs';
import { GroceryItem } from './grocery-item';
import { GroceryList } from './grocery-list';
import { GroceryListService } from './grocery-list.service';

@Component({
    selector: 'grocery-list',
    templateUrl: './grocery-list.component.html',
    styleUrls: ['./grocery-list.component.scss']
})
export class GroceryListComponent {

    groceryList$: Observable<GroceryList>;
    newGroceryItem = new GroceryItem();

    @ViewChild(NgForm)
    groceryListForm: NgForm|null = null;

    @ViewChild('newGroceryItemNameInput', { read: ElementRef })
    newGroceryItemNameInput: ElementRef|null = null;

    @ViewChild('newGroceryItemNameInput', {read: NgControl})
    newGroceryItemNameInputControl: NgControl | null = null;

    @ViewChild('newGroceryItemLabelInput', {read: NgControl})
    newGroceryItemLabelInputControl: NgControl | null = null;
    
    constructor(private groceryListService: GroceryListService) {
        this.groceryList$ = this.groceryListService.getGroceryList();
    }

    addNewGroceryItem(groceryList: GroceryList): void {
        if (this.groceryListForm?.invalid) {
            return;
        }
        this.addNewGroceryItemToList(groceryList);
        this.resetNewGroceryItemInput();
    }

    removeItem(groceryList: GroceryList, itemIndex: number): void {
        groceryList.items.splice(itemIndex, 1);
        this.groceryListService.updateGroceryList(groceryList);
    }

    private resetNewGroceryItemInput() {
        this.newGroceryItem.name = null;
        this.newGroceryItem.label = null;
        this.newGroceryItemNameInput?.nativeElement.focus()
    }

    private addNewGroceryItemToList(groceryList: GroceryList) {
        groceryList.items.push(JSON.parse(JSON.stringify(this.newGroceryItem)));
        this.groceryListService.updateGroceryList(groceryList);
    }
}
