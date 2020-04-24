// ES2015 import Component decorator
import { Component, OnInit } from '@angular/core';
// Component Decorator
@Component ({
    selector: 'app-customers',
    templateUrl: './customers.component.html'
})
export class CustomersComponent implements OnInit {
    title: string;
    people: any[];

    constructor(){}

    ngOnInit(){
        this.title = 'Customers';
        this.people = [
            {id: 1, name: 'J', city: 'Pretoria', orderTotal: 9.99, customerSince: new Date(2020, 1, 2) },
            {id: 2, name: 'Ja', city: 'Pret', orderTotal: 90.99, customerSince: new Date(2020, 2, 3) }
        ];
    }
}
