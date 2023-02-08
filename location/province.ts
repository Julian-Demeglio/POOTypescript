import { City } from "./city";

export class Province {
    private _name: string;
    private _cities: City[];

    constructor (name: string, cities: City[]){
        this._name= name;
        this._cities= cities;
    }

    public get name() {
        return this._name;
    }
    public set name(name: string) {
        this._name = name;
    }

    public get cities() {
        return this._cities;
    }
    public set cities(cities: City[]) {
        this._cities = cities;
    }
}
