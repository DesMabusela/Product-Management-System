import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  pageTitle = 'iMusic Store';
  cart:number = 0;
  constructor(){
    localStorage.setItem('cart',this.cart.toString());
   this.cart = parseInt(localStorage.getItem('cart'));
  }
}
