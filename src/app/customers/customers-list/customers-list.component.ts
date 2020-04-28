// Angular + 3rd party imports
import { Component, OnInit, Input } from '@angular/core';

// Custom imports
import { ICustomer } from '../../shared/interfaces';
import { SorterService } from '../../core/sorter.service';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['../../../assets/styles.css']
})


export class CustomersListComponent implements OnInit {
  private customersBacckingStore: ICustomer[] = []; // backing field / backing data store.

  filteredCustomers: ICustomer[] = [];
  customersOrderTotal: number;
  curencyCode: 'USD';

  @Input() get customers(): ICustomer[] {
    return this.customersBacckingStore;
  }

  set customers(value: ICustomer[]) {
    if (value) {
        this.filteredCustomers = this.customersBacckingStore = value;
        this.calculateOrders();
    }
  }
  constructor(private sorterService: SorterService) { }

  ngOnInit(): void {

  }

  calculateOrders() {
    this.customersOrderTotal = 0;
    this.filteredCustomers.forEach((cust: ICustomer) => {
        this.customersOrderTotal += cust.orderTotal;
    });
  }

  filter(data: string) {
    if (data) {
        this.filteredCustomers = this.customers.filter((cust: ICustomer) => {
            return cust.name.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
                   cust.city.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
                   cust.orderTotal.toString().indexOf(data) > -1;
        });
    } else {
        this.filteredCustomers = this.customers;
    }
    this.calculateOrders();
  }

  sort(prop: string){
    this.sorterService.sort(this.filteredCustomers, prop);
  }

}
