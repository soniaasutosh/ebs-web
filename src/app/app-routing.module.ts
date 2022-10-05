import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressEditComponent } from './address-edit/address-edit.component';
import { AddressesComponent } from './addresses/addresses.component';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';
import { CustomersComponent } from './customers/customers.component';

const routes: Routes = [
  {
    path: '', component: CustomersComponent,
  },
  {
    path:'customer',component:CustomerEditComponent
  },
  {
    path:'customer/:customerId',component:CustomerEditComponent
  },

  {
    path:'addresses',component:AddressesComponent
  },
  {
    path:'address/:addressId',component:AddressEditComponent
  },
  {
    path:'address',component:AddressEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
