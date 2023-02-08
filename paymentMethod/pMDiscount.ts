import { PaymentMethod } from "./paymentMethod";
import { DiscountPaymentMethod } from "./discountPaymentMethod";


export class pMDiscount extends PaymentMethod <DiscountPaymentMethod> {
    private _percent: number;

    constructor (type: DiscountPaymentMethod, percent: number) {
        super(type);
        this._percent = percent;
    }

    public get percent() {
        return this._percent;
    }
    public set percent(p: number) {
        this._percent = p;
    }
}
