import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Invoice} from "../model/invoice";
import {environment} from "../../environments/environment";
import { SimpleInvoice } from '../model/simpleInvoice';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
    console.log("apiServerUrl: ", this.apiServerUrl);
  }

  public gen(): Observable<any> {
    return this.http.get<Invoice>(`${this.apiServerUrl}/invoice/gen`);
  }

  public all(): Observable<any> {
    return this.http.get<Invoice>(`${this.apiServerUrl}/invoice/all`);
  }

  public get(invoiceID: String): Observable<any> {
    return this.http.get<Invoice>(`${this.apiServerUrl}/invoice/${invoiceID}`);
  }

  public add(invoice: Invoice): Observable<any> {
    return this.http.post<Invoice>(`${this.apiServerUrl}/invoice/add`, invoice);
  }


  public addd(invoice: SimpleInvoice): Observable<any> {
    return this.http.post<SimpleInvoice>(`${this.apiServerUrl}/invoice/add`, invoice);
  }


  public update(invoice: Invoice): Observable<Invoice> {
    return this.http.put<Invoice>(`${this.apiServerUrl}/invoice/add`, invoice);
  }

  public delete(invoiceId: String): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/invoice/delete/${invoiceId}`);
  }
}
