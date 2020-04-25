// Angular + 3rd party imports
import { Component, OnInit } from '@angular/core';

// Custom imports
import { ICustomer } from '../../shared/interfaces';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['../../../assets/styles.css']
})
export class CustomersListComponent implements OnInit {

  filteredCustomers: ICustomer[] = [];
  customerOrderTotal: number;
  curencyCode: 'USD';

  constructor() { }

  ngOnInit(): void {
  }

}
