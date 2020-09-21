import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector:'welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent {
  public pageTitle = 'Welcome';
  constructor(private routes:Router){}
  Shop(){
    console.log('Eish....');
    this.routes.navigate(['sign-in'])
  }
}