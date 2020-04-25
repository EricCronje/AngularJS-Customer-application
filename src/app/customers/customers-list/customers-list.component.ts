import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['../../../assets/styles.css']
})
export class CustomersListComponent implements OnInit {

  filteredCustomers: any[] = [];
  customerOrderTotal: number;
  curencyCode: 'USD';

  constructor() { }

  ngOnInit(): void {
  }

}
