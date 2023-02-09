import { ProductAmount } from "../product/pruductAmount";
import { PaymentMethod } from "../paymentMethod/paymentMethod";
import { AllPaymentsMethods } from "../paymentMethod/types";
import { Product } from "../product/product";

export class Sale {
    private _allItems: ProductAmount[];
    private _paymentMethod: PaymentMethod <AllPaymentsMethods>;
    private _date: String;

    constructor(
        singleSale: ProductAmount[],
        paymentMethod: PaymentMethod <AllPaymentsMethods>,
        date: String,
    ){
        this._allItems = singleSale;
        this._paymentMethod = paymentMethod;
        this._date = date;
    }

    public get singleSale() {
        return this._allItems;
    }
    public set singleSale(singleSale: ProductAmount[]) {
        this._allItems = singleSale;
    }

    public get paymentMethod() {
        return this._paymentMethod;
    }
    public set paymentMethod(paymentMethod: PaymentMethod <AllPaymentsMethods>) {
        this._paymentMethod = paymentMethod;
    }

    public get date() {
        return this._date;
    }
    public set date(date: String) {
        this._date = date;
    }

    public addSingleItem(prod:Product): void{
        const scannedItem = this._allItems.find((item)=>item.id === prod.id);
        if (scannedItem) {
            scannedItem.amount++;
            return;
        }

        const newScannedItem = new ProductAmount(
            prod.id,
            prod.name,
            prod.category,
            prod.brand,
            prod.presentation,
            prod.price,
            prod.notes,
            1);
        this._allItems.push(newScannedItem);
     }

     public removeItem(prod:Product): void{
        const scannedItem = this._allItems.find((item)=>item.id === prod.id);
        if (scannedItem) {
            const indexScannedItem = this._allItems.indexOf((scannedItem));
            this._allItems.splice(indexScannedItem, 1);
            return;
        }
     }
}