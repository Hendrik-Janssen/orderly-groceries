import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable, ReplaySubject, Subject } from 'rxjs';
import { GroceryItem } from './grocery-item';
import { GroceryList } from './grocery-list';

@Component({
    selector: 'grocery-list',
    templateUrl: './grocery-list.component.html',
    styleUrls: ['./grocery-list.component.scss']
})
export class GroceryListComponent implements OnInit {

    private groceryListSource$ = new ReplaySubject<GroceryList>();
    
    groceryList$: Observable<GroceryList>;
    newGroceryItem = new GroceryItem();

    @ViewChild(NgForm)
    groceryListForm: NgForm|null = null;

    @ViewChild('newGroceryItemNameInput', { read: ElementRef })
    newGroceryItemNameInput: ElementRef|null = null;
    
    constructor() {
        this.groceryList$ = this.groceryListSource$.asObservable();
    }

    ngOnInit(): void {
        this.groceryListSource$.next(new GroceryList([
            new GroceryItem('Melk', 'zuivel'),
            new GroceryItem('Eieren', 'zuivel'),
            new GroceryItem('Tomaten', 'fruit')
        ]));
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
        this.groceryListSource$.next(groceryList);
    }

    private resetNewGroceryItemInput() {
        this.groceryListForm?.control.markAsPristine();
        this.groceryListForm?.control.markAsUntouched();
        this.groceryListForm?.control.reset();
        this.newGroceryItem.name = null;
        this.newGroceryItem.label = null;
        this.newGroceryItemNameInput?.nativeElement.focus()
    }

    private addNewGroceryItemToList(groceryList: GroceryList) {
        groceryList.items.push(JSON.parse(JSON.stringify(this.newGroceryItem)));
        this.groceryListSource$.next(groceryList);
    }
}
