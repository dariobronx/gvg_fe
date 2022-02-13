import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import {BrowserModule } from '@angular/platform-browser';
import {HttpClient} from "@angular/common/http";
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
