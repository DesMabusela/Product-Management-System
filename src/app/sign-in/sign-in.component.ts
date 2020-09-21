import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  email: any;
  password: any;
  constructor(private router:Router,private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }
  SignIn(){
    this.router.navigate(['/music']);
    // if (this.email == undefined || this.password == undefined) { 
    //     this.snackBar.open("Fill empty fields", "OK", {
    //       duration: 2000,
    //     }); 
    // }
    // else{
    //   this.router.navigate(['/Main/Employees'],{state:{username:this.email,password:this.password}});
    // }
  }
}
