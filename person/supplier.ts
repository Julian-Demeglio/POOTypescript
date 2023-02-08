import { Product } from "../product/product";
import { Person } from "./person";
import { City } from "../location/city";

export class Supplier extends Person {
    private _bussinessName: string;
    private _bussinessEmail: string;
    private _products: Product[];
    private _city: City;

    constructor (
        name: string,
        lastName: string,
        idn: number,
        phone: number,
        email: string,
        bussinessName: string,
        bussinessEmail: string,
        products: Product[],
        city:City,
    ){
        super(name, lastName, idn, phone, email);
        this._bussinessName = bussinessName,
        this._bussinessEmail = bussinessEmail,
        this._products = products,
        this._city = city
    }

    public get bussinessName() {
        return this._bussinessName;
    }
    public set bussinessName(bussinessName: string) {
        this._bussinessName = bussinessName;
    }

    public get bussinessEmail() {
        return this._bussinessEmail;
    }
    public set bussinessEmail(bussinessEmail: string) {
        this._bussinessEmail = bussinessEmail;
    }

    public get products() {
        return this._products;
    }
    public set products(products: Product[]) {
        this._products = products;
    }

    public get city() {
        return this._city;
    }
    public set city(city: City) {
        this._city = city;
    }
}