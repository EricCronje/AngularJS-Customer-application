import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'app-cars-list',
    templateUrl: './cars-list.component.html'
})
export class CarsListComponent implements OnInit{
    filteredCars: any[] = [];
    title: string;
    constructor(){}

    ngOnInit(){
        this.title = 'Cars-list';
    }
}
