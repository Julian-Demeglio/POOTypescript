import { BasePaymentMethod } from "./basePaymentMethod";
import { DiscountPaymentMethod } from "./discountPaymentMethod";
import { InstalmentPaymentMethod } from "./instalmentPaymentMethod";

export type AllPaymentsMethods = BasePaymentMethod | DiscountPaymentMethod | InstalmentPaymentMethod
