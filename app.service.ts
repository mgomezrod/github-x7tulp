import { Injectable } from '@angular/core';

export class Order {
    ID: string;
    OrderNumber: string;
    OrderDate: string;
    DeliveryDate: string;
    SaleAmount: string;
    Terms: string;
    CustomerStoreCity: string;
    Employee: string;
}

let orders: Order[] = [{
    "ID": "1",
    "OrderNumber": "35703",
    "OrderDate": "2017/04/10",
    "DeliveryDate": "2017/04/13 9:00",
    "SaleAmount": "11800",
    "Terms": "15 Days",
    "CustomerStoreCity": "Los Angeles, CA",
    "Employee": "Harv Mudd"
}, {
    "ID": "4",
    "OrderNumber": "35711",
    "OrderDate": "2017/01/12",
    "DeliveryDate": "2017/01/13 9:00",
    "SaleAmount": "16050",
    "Terms": "15 Days",
    "CustomerStoreCity": "San Jose, CA",
    "Employee": "Jim Packard"
}, {
    "ID": "91",
    "OrderNumber": "214222",
    "OrderDate": "2017/02/08",
    "DeliveryDate": "2017/02/10 9:45",
    "SaleAmount": "11050",
    "Terms": "30 Days",
    "CustomerStoreCity": "Phoenix, AZ",
    "Employee": "Clark Morgan"
}];

@Injectable()
export class Service {
    getOrders(): Order[] {
        return orders;
    }

    public state:any;
}
