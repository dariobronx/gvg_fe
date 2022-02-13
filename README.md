# GvgFe

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.3.

## Scope

GVG srl è un'azienda che vende all'ingrosso.

Nell'ambito della transizione digitale, GVG decide di dire addio al blocchetto cartaceo delle fatture e dotarsi
di un registro elettronico delle fatture emesse. Tramite questo programma è possibile creare fatture, inviarle ai
clienti e conservarle a norma di legge.

Quando un cliente invia un ordine di acquisto GVG prepara la merce per la consegna ed emette una fattura con il
dettaglio dei beni richiesti, il totale da pagare e gli estremi per il pagamento. La fattura è un documento obbligatorio
per legge e riporta:

* l'identificativo nel sistema di contabilità: un numero e un anno, ad esempio 150/20229
* la data di emissione, ad esempio 1 gennaio 2022
* gli estremi del cedente/prestatore (cioè chi emette la fattura): nome e partita IVA
  (un codice di 11 caratteri) di Ortogoloso
* gli estremi del cessionario/committente (cioè chi deve pagare la fattura): nome e partita IVA (un codice di 11
  caratteri) dei clienti di Ortogoloso
* una riga per ogni bene venduto/prestazione offerta, che dettaglia il prezzo unitario, la quantità e l'aliquota IVA
* importo, modalità ed estremi del pagamento, ad esempio 1000€ in un'unica soluzione da pagare tramite bonifico al
  codice IBAN

#RUN
Open a terminal from the project directory
>npm install

>ng serve

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
