
import type { ProductInterface } from "./ProductInterface";

export interface CartInterface {
    id: number,
    orderTrackingNumber?: string,
    status?: string,
    customer?: string,
    cartItems?: ProductInterface[],
    catagory?: string,
}