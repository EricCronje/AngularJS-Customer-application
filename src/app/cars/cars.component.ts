import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'app-cars',
    templateUrl: './cars.component.html'
})
export class CarsComponent implements OnInit{
    title: string;
    cars: any[];

    constructor(){}

    ngOnInit(){
        this.title = 'Cars';
        this.cars = [
            {reg: 1, color: 'red', model: 'Mazda', engine: '1.4'},
            {reg: 2, color: 'blue', model: 'Porche', engine: 'V6'}
        ];
    }
}
