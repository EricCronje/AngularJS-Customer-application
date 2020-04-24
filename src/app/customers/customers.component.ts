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
            {id: 1, name: 'Donald', city: 'CapeTown', orderTotal: 5.55, customerSince: new Date(2020, 1, 1)},
            {id: 2, name: 'Ernist', city: 'Pretoria', orderTotal: 6.78, customerSince: new Date(2020, 2, 5)}
        ];
    }
}
