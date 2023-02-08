import { PaymentMethod } from "./paymentMethod";
import { InstalmentPaymentMethod } from "./instalmentPaymentMethod";

export class pMInstalment extends PaymentMethod <InstalmentPaymentMethod>{
    private _amount: number;
    private _interests: number;

    constructor (type: InstalmentPaymentMethod, amount: number, interests: number) {
        super(type);
        this._amount = amount;
        this._interests = interests;
    }

    public get amount() {
        return this._amount;
    }
    public set amount(amount: number) {
        this._amount = amount;
    }

    public get interests() {
        return this._interests;
    }
    public set interests(interests: number) {
        this._interests = interests;
    }
}
