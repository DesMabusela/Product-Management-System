import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  email: any;
  password: any;
  fullname: any;
  contact: any;
  constructor() { }

  ngOnInit(): void {
  }
  SignUp(){

  }
}
