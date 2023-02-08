import { AllPaymentsMethods } from "./types";

export class PaymentMethod <AllPaymentsMethods> {
_type: AllPaymentsMethods;

    constructor (type: AllPaymentsMethods) {
        this._type = type;
    }

    public get type() {
        return this._type;
    }
    public set type(type: AllPaymentsMethods) {
        this._type = type;
    }
}