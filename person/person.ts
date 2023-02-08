export class Person {
    private _name: string;
    private _lastName: string;
    private _idn: number;
    private _phone: number;
    private _email: string;

    constructor(
        name: string,
        lastName: string,
        idn: number,
        phone: number,
        email: string,
    ){
        this._name = name;
        this._lastName = lastName;
        this._idn = idn;
        this._phone = phone;
        this._email = email;
    }

    public get name() {
        return this._name;
    }
    public set name(name: string) {
        this._name = name;
    }

    public get lastName() {
        return this._lastName;
    }
    public set lastName(lastName: string) {
        this._lastName = lastName;
    }

    public get idn() {
        return this._idn;
    }
    public set idn(idn: number) {
        this._idn = idn;
    }

    public get phone() {
        return this._phone;
    }
    public set phone(phone: number) {
        this._phone = phone;
    }

    public get email() {
        return this._email;
    }
    public set email(email: string) {
        this._email = email;
    }
}