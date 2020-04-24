import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'app-customers',
    templateUrl: './customers.component.html'
})
export class CustomersComponent implements OnInit{
    title: string;
    people: any[];

    constructor(){}

    ngOnInit(){
        this.title = 'Customers';
        this.people = [
            {id: 1, name: 'Fred', city: 'Pretoria', orderTotal: 9.99, customerSince: new Date(2020, 5, 1)},
            {id: 2, name: 'Gert', city: 'Johannesburg', orderTotal: 900.99, customerSince: new Date(2020, 6, 7)}
        ];
    }
}
