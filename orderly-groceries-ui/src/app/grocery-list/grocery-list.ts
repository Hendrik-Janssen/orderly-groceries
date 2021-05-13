import { GroceryItem } from './grocery-item';

export class GroceryList {

    public items: GroceryItem[];

    constructor(items: GroceryItem[]) {
        this.items = items;
        return this;
    }

}
