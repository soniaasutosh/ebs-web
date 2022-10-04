import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Customer } from './customer.model';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  
];

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
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

}
