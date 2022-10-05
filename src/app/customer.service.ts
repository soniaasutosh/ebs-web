import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Customer } from './customers/customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  SERVICE_URL = '/api/customer'

  constructor(private http: HttpClient) { }

  public getCustomers() {
    return this.http.get<Customer[]>(this.SERVICE_URL);
  }

  public getCustomer(customerId: number) {
    return this.http.get<Customer>(this.SERVICE_URL + '/' + customerId);
  }

  public updateCustomer(customerId: number, customer: Customer) {
    const {
      customerName,
      gender,
      mobileNumber
    } = customer;

    return this.http.put<Customer>(this.SERVICE_URL + '/' + customerId, {
      customerName,
      gender,
      mobileNumber
    });
  }

  public createCustomer(customer: Customer) {
    const {
      customerName,
      gender,
      mobileNumber
    } = customer;
    
    return this.http.post<Customer>(this.SERVICE_URL, {
      customerName,
      gender,
      mobileNumber
    });

  }
}
