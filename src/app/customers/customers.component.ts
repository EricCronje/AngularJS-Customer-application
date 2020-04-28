import { Component, OnInit } from '@angular/core';
import { ICustomer } from '../shared/interfaces';
import { DataService } from '../core/data.service';

@Component({
    selector: 'app-customers',
    templateUrl: './customers.component.html'
})
export class CustomersComponent implements OnInit{
    title: string;
    people: ICustomer[];
    isVisible = true;
    version: string;

    constructor(private dataService: DataService){}

    ngOnInit(){
        this.title = 'Customers';
        this.version = '2.2.10';
        this.dataService.getCustomers()
        .subscribe((customers: ICustomer[]) => this.people = customers);

        // this.people = [
        //     {id: 1, name: 'donald', city: 'CapeTown', orderTotal: 5, customerSince: new Date(2020, 1, 1)},
        //     {id: 2, name: 'Ernist', city: 'Pretoria', orderTotal: 6.06, customerSince: new Date(2020, 2, 5)},
        //     {id: 3, name: 'frank john', city: 'CApetown', orderTotal: 6.06, customerSince: new Date(2020, 2, 5)}
        // ];

    }
}
