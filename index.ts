import { Supplier } from "./person/supplier";
import { Category } from "./product/category";
// import { Person } from "./person/person";
import { Product } from "./product/product";
import { City } from "./location/city";
import { ProductAmount } from "./product/pruductAmount";
import { Inventory } from "./branch/inventory";
import { Sale } from "./transactions/sale";
import { PaymentMethod } from "./paymentMethod/paymentMethod";
import { BasePaymentMethod } from "./paymentMethod/basePaymentMethod";

// const person: Person = new Person("JUan", "Perez", 33323423, 2342345434, "asdasd@asdasda.com")
// const supplierCity: City = new City ("Rosario", 2000);
// const product1: Product = new Product (1,"Rosario", Category.candies, "Rosario", "Rosario", 123, "dasdadadada");
// const product2: Product = new Product (2,"asdsa", Category.candies, "Rosario", "Rosario", 1233223,"asd");

// const supplier: Supplier = new Supplier(
// "Juan",
// "Perez",
// 33323423,
// 2342345434,
// "asdasd@asdasda.com",
// "Bagley",
// "blagley@asda.cod",
// [product1,product2],
// supplierCity,
//  );
// console.log(supplier);

const productStock1 = new ProductAmount (1,"Rosario", Category.candies, "Rosario", "Rosario", 123, "dasdadadada", 34);
const productStock2: ProductAmount = new ProductAmount (3,"Rosario", Category.candies, "Rosario", "Rosario", 123, "dasdadadada", 54);

const productPurchase1: ProductAmount = new ProductAmount (1,"Rosario", Category.candies, "Rosario", "Rosario", 123, "dasdadadada", 34);
const productPurchase2: ProductAmount = new ProductAmount (5,"Rosario", Category.candies, "Rosario", "Rosario", 123, "dasdadadada", 54);
const stock: Inventory = new Inventory ([productStock1,productStock2])

console.log("stock previo:",stock);
stock.addProduct(productPurchase1);
console.log("stock posterior:", stock);
stock.addProduct(productPurchase2);
console.log("stock posterior posterior:", stock);

const productSale1: ProductAmount = new ProductAmount (1,"Rosario", Category.candies, "Rosario", "Rosario", 123, "dasdadadada", 34);
const productSale2: ProductAmount = new ProductAmount (5,"Rosario", Category.candies, "Rosario", "Rosario", 123, "dasdadadada", 54);
const productSale3: ProductAmount = new ProductAmount (6,"Rosario", Category.candies, "Rosario", "Rosario", 123, "dasdadadada", 34);
const productSale4: ProductAmount = new ProductAmount (9,"Rosario", Category.candies, "Rosario", "Rosario", 123, "dasdadadada", 54);
const productSale5: ProductAmount = new ProductAmount (12,"Rosario", Category.candies, "Rosario", "Rosario", 123, "dasdadadada", 34);
const productSale6: ProductAmount = new ProductAmount (523,"Rosario", Category.candies, "Rosario", "Rosario", 123, "dasdadadada", 54);
let today = new Date().toISOString().slice(0, 10);

const pm = new PaymentMethod (BasePaymentMethod.debit);

const sale = new Sale ([productSale1, productSale2, productSale3, productSale4, productSale5, productSale6], pm, today)
console.log(sale);

sale.removeItem(productSale2);
console.log(sale);