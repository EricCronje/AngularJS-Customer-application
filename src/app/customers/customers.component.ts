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
        this.title = 'Customers Fourth Time.';
        this.people = [
            {id: 1, name: 'Andy', city: 'Pretoria', orderTotal: 55.55, customerSince: new Date(2020, 1, 13)},
            {id: 2, name: 'Peter', city: 'Johannesburg', orderTotal: 53.22, customerSince: new Date(2020, 2, 20)}
        ];
    }
}
