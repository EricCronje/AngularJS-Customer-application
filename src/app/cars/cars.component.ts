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
    }
}
