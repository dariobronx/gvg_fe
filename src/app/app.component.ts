import {Component, OnInit, OnDestroy} from '@angular/core';
import {InvoiceService} from "./services/invoice.service";
import {HttpErrorResponse} from "@angular/common/http";
import {Invoice} from './model/invoice';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gvg_fe';
  currentInvoice!: Invoice;
  invoices: Invoice[];
  invoiceAllSubscription!: Subscription;

  constructor(private invoiceService: InvoiceService) {
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
}
