import { Injectable } from "@angular/core";
import { Observable, ReplaySubject } from "rxjs";
import { GroceryItem } from "./grocery-item";
import { GroceryList } from "./grocery-list";

@Injectable()
export class GroceryListService {

    private groceryListSource$ = new ReplaySubject<GroceryList>();

    public constructor() {
        this.groceryListSource$.next(new GroceryList([
            new GroceryItem('Melk', 'zuivel'),
            new GroceryItem('Eieren', 'zuivel'),
            new GroceryItem('Tomaten', 'fruit')
        ]));
    }

    public getGroceryList(): Observable<GroceryList> {
        return this.groceryListSource$.asObservable();
    }

    public updateGroceryList(newGroceryList: GroceryList): void {
        console.log(newGroceryList);
        this.groceryListSource$.next(newGroceryList);
    }

}