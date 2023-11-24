import { NgModule, Component, ViewChild, enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxDataGridComponent,
         DxDataGridModule,
         DxSelectBoxModule,
         DxCheckBoxModule } from 'devextreme-angular';

import { Order, Service } from './app.service';


@Component({
    selector: 'demo-app',
    providers: [ Service ],
    templateUrl: './report.component.html',
    styleUrls: ['./report.component.css']
})

export class AppComponent {
    @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;
    orders: Order[];
    saleAmountHeaderFilter: any;
    applyFilterTypes: any;
    currentFilter: any;
    showFilterRow: boolean;
    showHeaderFilter: boolean;
    show: boolean = true;
    reportUrl = 'XtraReport1';
      // Variable para almacenar la acción del controlador que procesa las peticiones
    invokeAction = '/DXXRDV';
    
    hostUrl = 'https://apitest.ikbo.co/sales';

    constructor(private service: Service) {
        this.orders = service.getOrders();
        this.showFilterRow = true;
        this.showHeaderFilter = true;
        this.applyFilterTypes = [{
            key: "auto",
            name: "Immediately"
        }, {
            key: "onClick",
            name: "On Button Click"
        }];
        this.saleAmountHeaderFilter = [{
            text: "Less than $3000",
            value: ["SaleAmount", "<", 3000]
        }, {
            text: "$3000 - $5000",
            value: [
                ["SaleAmount", ">=", 3000],
                ["SaleAmount", "<", 5000]
            ]
        }, {
            text: "$5000 - $10000",
            value: [
                ["SaleAmount", ">=", 5000],
                ["SaleAmount", "<", 10000]
            ]
        }, {
            text: "$10000 - $20000",
            value: [
                ["SaleAmount", ">=", 10000],
                ["SaleAmount", "<", 20000]
            ]
        }, {
            text: "Greater than $20000",
            value: ["SaleAmount", ">=", 20000]
        }];
        this.currentFilter = this.applyFilterTypes[0].key;
        this.orderHeaderFilter = this.orderHeaderFilter.bind(this);
    }

    private static getOrderDay(rowData) {
        return (new Date(rowData.OrderDate)).getDay();
    }

    calculateFilterExpression(value, selectedFilterOperations, target) {  
        let column = this as any;      
        if(target === "headerFilter" && value === "weekends") {
            return [[AppComponent.getOrderDay, "=", 0], "or", [AppComponent.getOrderDay, "=", 6]];
        }
        return column.defaultCalculateFilterExpression.apply(this, arguments);
    }

    orderHeaderFilter(data) {
        data.dataSource.postProcess = (results) => {
            results.push({
                text: "Weekends",
                value: "weekends"
            });                        
            return results;
        };
    }

    clearFilter() {
        this.dataGrid.instance.clearFilter();
    }

    onInitialized(e) {
        e.component.columnOption("SaleAmount", {
            editorOptions: {
                format: "currency",
                showClearButton: true
            }
        });
    }

    loadState(){
      this.dataGrid.instance.state(this.service.state);
    }

    saveState(){
      this.service.state = this.dataGrid.instance.state();
    }

    toggle() {
      this.show = !this.show;
    }

    onContentReady(){
      console.log('on content ready')
      if (this.service.state) {
        this.loadState();
        this.service.state =null;
      }
    }
   // Método para personalizar las acciones del menú en la barra de herramientas
   CustomizeMenuActions(event: any) {
    // Eliminar las acciones de imprimir y exportar
    event.args.actions = event.args.actions.filter(
      (action: any) => action.text !== 'Print' && action.text !== 'Export'
    );
  }   
}