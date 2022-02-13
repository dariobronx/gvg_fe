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

  public all(): Observable<any> {
    return this.http.get<Invoice>(`${this.apiServerUrl}/invoice/all`);
  }

}
