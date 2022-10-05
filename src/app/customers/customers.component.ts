import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Customer } from './customer.model';




@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  displayedColumns: string[] = ['customerId', 'name', 'mobileNumber', 'gender','action'];
  customerList: Customer[] = [];

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
   this.customerService.getCustomers().subscribe((data)=>{
    console.log("customers ",data)
    this.customerList = data;
   },(error)=>{
    console.log("Error -- ",error)
   })
  }

  deleteCustomer(customerId : number): void {
    console.log("called delete customer", customerId);
    
  }

}
