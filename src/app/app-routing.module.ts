import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';
import { CustomersComponent } from './customers/customers.component';

const routes: Routes = [
  {
    path: '', component: CustomersComponent,
  },
  {
    path:'cutomer/edit',component:CustomerEditComponent
  },
  {
    path:'cutomer/:customerId',component:CustomerEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
