import { ProductAmount } from "../product/pruductAmount"

export class Inventory{
    private _stock: ProductAmount[];

    constructor (stock: ProductAmount[]){
        this._stock = stock;
    }

    public get stock() {
        return this._stock;
    }
    public set stock(stock: ProductAmount[]) {
        this._stock = stock;
    }

    public addProduct(prod:ProductAmount){
       const foundItem = this._stock.find((item)=>item.id === prod.id)
    //    console.log(foundItem);
       if (foundItem) {
        foundItem.amount = foundItem.amount + prod.amount;
       } else {
        const newItem = new ProductAmount(
            prod.id,
            prod.name,
            prod.category,
            prod.brand,
            prod.presentation,
            prod.price,
            prod.notes,
            prod.amount)
        this.stock.push(newItem);
        }
    }
}