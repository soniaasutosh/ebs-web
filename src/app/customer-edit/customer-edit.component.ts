import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CustomerService } from '../customer.service';
import { Customer } from '../customers/customer.model';


@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {

  customerId: number | null = null;
  customer : Customer = {};
  genders: string[] = [];

  constructor(private route: ActivatedRoute,private customerService: CustomerService,private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const _customerId:any = routeParams.get('customerId');
    this.customerId = _customerId;


    if(this.customerId){
      this.customerService.getCustomer(this.customerId).subscribe((data)=>{
        console.log("customer ",data)
        this.customer=data;
       },(error)=>{
        console.log("Error -- ",error)
       })
    }
  }

  onSubmit(): void {
    console.log("called onsubmit", this.customer)

    if(this.customerId){
      this.customerService.updateCustomer(this.customerId,this.customer).subscribe((data)=>{
        console.log("updated customer ",data)
        this._snackBar.open("Customer Updated", "OK!",{horizontalPosition:'left',duration:3000});
       },(error)=>{
        console.log("Error -- ",error)
       })
    }else{
      this.customerService.createCustomer(this.customer).subscribe((data)=>{
        if(data.customerId){
          console.log("created new customer ",data)
          this.customerId=data.customerId;
          this.customer= data;
        }else{
          console.log("something went wrong -- ",data)
        }
       },(error)=>{
        console.log("Error -- ",error)
       })
    }
  }

}
