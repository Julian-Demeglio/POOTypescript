import { Category } from "./category";

export class Product {
    private _id: number;
    private _name: string;
    private _category: Category;
    private _brand: string;
    private _presentation: string;
    private _price: number;
    private _notes: string;

    constructor (
        id: number,
        name: string,
        category: Category,
        brand: string,
        presentation: string,
        price: number,
        notes: string
    ) {
        this._id = id;
        this._name = name;
        this._category = category;
        this._brand = brand;
        this._presentation = presentation;
        this._price = price;
        this._notes = notes;
    }

    public get id() {
        return this._id;
    }
    public set id(id: number) {
        this._id = id;
    }

    public get name() {
        return this._name;
    }
    public set name(name: string) {
        this._name = name;
    }

    public get category() {
        return this._category;
    }
    public set category(category: Category) {
        this._category = category;
    }

    public get brand() {
        return this._brand;
    }
    public set brand(brand: string) {
        this._brand = brand;
    }

    public get presentation() {
        return this._presentation;
    }
    public set presentation(presentation: string) {
        this._presentation = presentation;
    }

    public get price() {
        return this._price;
    }
    public set price(price: number) {
        this._price = price;
    }

    public get notes() {
        return this._notes;
    }
    public set notes(notes: string) {
        this._notes = notes;
    }
}