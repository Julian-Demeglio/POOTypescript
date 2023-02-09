import { Product } from "./product";
import { Category } from "./category";

export class ProductAmount extends Product {
    private _amount: number;

    constructor(
        id: number,
        name: string,
        category: Category,
        brand: string,
        presentation: string,
        price: number,
        notes: string,
        amount: number
    ){
        super(id, name, category, brand, presentation, price, notes);
        this._amount = amount
    }
    public get amount() {
        return this._amount;
    }
    public set amount(amount: number) {
        this._amount = amount;
    }
}