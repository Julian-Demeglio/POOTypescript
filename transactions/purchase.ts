import { ProductAmount } from "../product/pruductAmount";
import { Supplier } from "../person/supplier";
import { PaymentMethod } from "../paymentMethod/paymentMethod";
import { AllPaymentsMethods } from "../paymentMethod/types";
import { Product } from "../product/product";

export class Purchase {
    private _singlePurchases: ProductAmount[];
    private _supplier: Supplier;
    private _paymentMethod: PaymentMethod <AllPaymentsMethods>;
    private _date: Date;

    constructor(
        singlePurchases: ProductAmount[],
        supplier: Supplier,
        paymentMethod: PaymentMethod <AllPaymentsMethods>,
        date: Date,
    ){
        this._singlePurchases = singlePurchases;
        this._supplier = supplier
        this._paymentMethod = paymentMethod;
        this._date = date;
    }

    public get singlePurchases() {
        return this._singlePurchases;
    }
    public set singlePurchases(singlePurchases: ProductAmount[]) {
        this._singlePurchases = singlePurchases;
    }

    public get supplier() {
        return this._supplier;
    }
    public set supplier(supplier: Supplier) {
        this._supplier = supplier;
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
    public set date(date: Date) {
        this._date = date;
    }

    private totalPerProduct (productAmount:ProductAmount){
       let total = productAmount.price*productAmount.amount;
       
       return total;
    }

    public



}