import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CustomerService } from '../customer.service';
import { Customer } from './customer.model';




@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  displayedColumns: string[] = ['customerId', 'name', 'mobileNumber', 'gender', 'action'];
  customerList: Customer[] = [];

  constructor(private customerService: CustomerService,private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getAllCustomers();
  }

  getAllCustomers(){
    this.customerService.getCustomers().subscribe((data) => {
      console.log("customers ", data)
      this.customerList = data;
    }, (error) => {
      console.log("Error -- ", error)
    })
  }

  deleteCustomer(customerId: number): void {
    console.log("called delete customer", customerId);
    this.customerService.deleteCustomer(customerId).subscribe((result) => {
      console.log("success", result)
      this._snackBar.open("Customer Deleted #"+customerId, "OK!",{horizontalPosition:'left',duration:3000});
      this.getAllCustomers();
    }, (error) => {
      console.log("Error -- ", error)
    })

  }

}
