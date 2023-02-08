import { City } from "../location/city";
import { Employee } from "../person/employee";
import { Person } from "../person/person";
import { Supplier } from "../person/supplier";
import { Product } from "../product/product";
import { ProductAmount } from "../product/pruductAmount";
import { Purchase } from "../transactions/purchase";
import { Sale } from "../transactions/sale";
import { Inventory } from "./inventory";


class branch {
    private _address: string;
    private _owner: Person;
    private _employee: Employee[];
    private _branchProducts: Product[];
    private _stock: Inventory;
    private _city: City;
    private _suppliers: Supplier[];
    private _purchase: Purchase[];
    private _sale: Sale[];

    constructor(
        address: string,
        owner: Person,
        employee: Employee[],
        branchProducts: Product[],
        stock: Inventory,
        city: City,
        suppliers: Supplier[],
        purchase: Purchase[],
        sale: Sale[],
    ){
        this._address = address,
        this._owner = owner,
        this._employee = employee,
        this._branchProducts = branchProducts,
        this._stock = stock;
        this._city = city;
        this._suppliers = suppliers;
        this._purchase = purchase;
        this._sale = sale;
    }

    public get address() {
        return this._address;
    }
    public set address(address: string) {
        this._address = address;
    }

    public get owner() {
        return this._owner;
    }
    public set owner(owner: Person) {
        this._owner = owner;
    }

    public get employee() {
        return this._employee;
    }
    public set employee(employee: Employee[]) {
        this._employee = employee;
    }

    public get branchProducts() {
        return this._branchProducts;
    }
    public set branchProducts(branchProducts: Product[]) {
        this._branchProducts = branchProducts;
    }

    public get stock() {
        return this._stock;
    }
    public set stock(stock: ProductAmount[]) {
        this._stock = stock;
    }

    public get city() {
        return this._city;
    }
    public set city(city: City) {
        this._city = city;
    }

    public get suppliers() {
        return this._suppliers;
    }
    public set suppliers(suppliers: Supplier[]) {
        this._suppliers = suppliers;
    }

    public get purchase() {
        return this._purchase;
    }
    public set purchase(purchase: Purchase[]) {
        this._purchase = purchase;
    }

    public get sale() {
        return this._sale;
    }
    public set sale(sale: Sale[]) {
        this._sale = sale;
    }

    public sell(){
        
    }
}