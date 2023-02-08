import { Person } from "./person";
import { shift } from "../branch/shift";

export class Employee extends Person{
    private _shift: shift

    constructor (
        name: string,
        lastName: string,
        idn: number,
        phone: number,
        email: string,
        shift: shift
    ){
        super(name, lastName, idn, phone, email);
        this._shift = shift
    }

    public get shift() {
        return this._shift;
    }
    public set shift(shift: shift) {
        this._shift = shift;
    }
}