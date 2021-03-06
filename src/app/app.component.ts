import {Component, OnInit, OnDestroy} from '@angular/core';
import {InvoiceService} from "./services/invoice.service";
import {HttpErrorResponse} from "@angular/common/http";
import {Invoice} from './model/invoice';
import {SimpleInvoice} from './model/simpleInvoice';
import {Subscription} from 'rxjs';
import {FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {OrderItem} from './model/orderItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'gvg_fe';
  currentInvoice!: Invoice;
  invoices: Invoice[];
  invoiceAllSubscription!: Subscription;

  invoiceForm = this.fb.group({
    id: ['', [Validators.required,
      Validators.minLength(6),
      Validators.maxLength(50)]],
    year: ['', [Validators.required]],
    number: ['', [Validators.required]],
    emissionDate: ['', [Validators.required]],
    paymentMethod: ['', [Validators.required]],
    installments: [false],
    iban: [false],
    buyerUser: this.fb.group({
      name: ['', [Validators.required]],
      piva: ['', [Validators.required]]
    }),
    sellerUser: this.fb.group({
      name: ['', [Validators.required]],
      piva: ['', [Validators.required]]
    }),
    order: this.fb.group({
        iva:  ['', [Validators.required]],
        expense:  ['', [Validators.required]]
    })
  });

  constructor(private invoiceService: InvoiceService, private fb: FormBuilder) {
    this.invoices = [];
  }

  ngOnInit() {
    this.getInvoices();
  }

  ngOnDestroy() {
    this.invoiceAllSubscription.unsubscribe();
  }

  getInvoices(): void {
    this.invoiceAllSubscription = this.invoiceService.all().subscribe(
      (response: Invoice[]) => {
        this.invoices = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  addItem(): void {
    // let newOrderItem: OrderItem = new OrderItem();
    // newOrderItem.ivaExpense = 12345678;
    // this.currentInvoice.order.items.push(newOrderItem);
  }

  newItem(){
    this.invoiceForm.reset;
  }

  save(): void {
    console.log(this.invoiceForm.value);
    if(this.invoiceForm.get(['id']) == null){
      const number = this.invoiceForm.get(['number'])!.value;
      const year = this.invoiceForm.get(['year'])!.value;
      this.invoiceForm.get(['id'])?.setValue(number + "-" + year);
    }
    // seller = this.invoiceForm.get(['sellerUser'])!.value
    // let invoice = new Invoice(id, number, year, this.invoiceForm.get(['sellerUser'])!.value);
    // console.log(invoice);
    this.invoiceService.add(this.invoiceForm.value).subscribe(
      (response: void) => {
        this.getInvoices();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  modify(invoice: Invoice): void {
    this.currentInvoice = invoice;
    this.invoiceForm.patchValue(this.currentInvoice);
  }

  delete(invoiceID: String): void {
    console.log("deleting {}", invoiceID);
    this.invoiceService.delete(invoiceID).subscribe(
      (response: void) => {
        this.getInvoices();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}