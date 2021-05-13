import { Component, OnInit } from '@angular/core';
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
        groceryList.items.push(JSON.parse(JSON.stringify(this.newGroceryItem)));
        this.groceryListSource$.next(groceryList);
        this.newGroceryItem.name = null;
    }
}
