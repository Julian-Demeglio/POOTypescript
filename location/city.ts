export class City {
    private _name: string;
    private _postalCode: number;

    constructor (name: string, postalCode: number){
        this._name= name;
        this._postalCode= postalCode;
    }

    public get name() {
        return this._name;
    }
    public set name(name: string) {
        this._name = name;
    }

    public get postalCode() {
        return this._postalCode;
    }
    public set postalCode(postalCode: number) {
        this._postalCode = postalCode;
    }
}