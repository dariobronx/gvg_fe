import { Order } from "./order";
import { User } from "./user";

export class Invoice {
  id: String;
  number: number;
  year: number;
  sellerUser: User;
  buyerUser: User;
  emissionDate: Date;
  paymentMethod: String;
  installments: boolean;
  order: Order;
  iban: String;

  constructor(id: String, number: number, year: number, sellerUser: User, buyerUser: User, emissionDate: Date, paymentMethod: String, installments: boolean, order: Order, iban: String) {
    this.id = id;
    this.number = number;
    this.year = year;
    this.sellerUser = sellerUser;
    this.buyerUser = buyerUser;
    this.emissionDate = emissionDate;
    this.paymentMethod = paymentMethod;
    this.installments = installments;
    this.order = order;
    this.iban = iban;
  }

// constructor(number: number, year: number){
  //   this.number=number;
  //   this.year=year;
  //   // this.id=id;
  //  //this.sellerUser=null;
  //  //this.buyerUser: User;
  //  //this.emissionDate: Date;
  //  //this.paymentMethod: String;
  //  //this.installments: boolean;
  //  //this.order: Order;
  // }

}
