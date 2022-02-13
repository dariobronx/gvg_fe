import {OrderItem} from "./orderItem";

export interface Order {
  items: OrderItem[];
  iva: number;
  expense: number;
}
