import { ProductAmount } from "../product/pruductAmount";
import { PaymentMethod } from "../paymentMethod/paymentMethod";
import { AllPaymentsMethods } from "../types";

export class Sale {
    private _singleSale: ProductAmount[];
    private _paymentMethod: PaymentMethod <AllPaymentsMethods>;
    private _date: Date;

    constructor(
        singleSale: ProductAmount[],
        paymentMethod: PaymentMethod <AllPaymentsMethods>,
        date: Date,
    ){
        this._singleSale = singleSale;
        this._paymentMethod = paymentMethod;
        this._date = date;
    }

    public get singleSale() {
        return this._singleSale;
    }
    public set singleSale(singleSale: ProductAmount[]) {
        this._singleSale = singleSale;
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
}