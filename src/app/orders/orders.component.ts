import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { DataService } from '../core/data.service';
import { ICustomer, IOrder, IOrderItem } from '../shared/interfaces';

@Component({
  selector: 'app-orders',
  styleUrls: [ './orders.component.css' ],
  templateUrl: './orders.component.html',
})
export class OrdersComponent implements OnInit {

  public customer: ICustomer;
  public orders: IOrder[] = [];

  constructor(private dataService: DataService,
              private route: ActivatedRoute) { }

  public ngOnInit() {

    const id = +this.route.snapshot.paramMap.get('id');

    this.dataService.getOrders(id).subscribe((orders: IOrder[]) => {
      this.orders = orders;
    });

    this.dataService.getCustomer(id).subscribe((customer: ICustomer) => {
      this.customer = customer;
    });
  }

}
