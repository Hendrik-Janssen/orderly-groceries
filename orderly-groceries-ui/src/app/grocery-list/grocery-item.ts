export class GroceryItem {

    public name: string|null;
    public label: string|null;

    constructor(name: string|null = null, label: string|null = null) {
        this.name = name;
        this.label = label;
    }

}
