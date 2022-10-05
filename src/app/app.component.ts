import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ebs-webapp';

  constructor(private router: Router){}

  public onclickHeader(){
    console.log("clicked ....", new Date())
    this.router.navigate(['/']);
  }
}
