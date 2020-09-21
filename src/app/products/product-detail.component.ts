import { Component, OnInit, Inject } from '@angular/core';
import { IProduct } from '../hip-hop/product';
import { ActivatedRoute, Router} from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  pageTitle: string='Product Detail';
  product: IProduct;
  cart:number = parseInt(localStorage.getItem('cart'));
  constructor(public dialogRef: MatDialogRef<ProductDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { 
      console.log(data);
    }

  ngOnInit(): void { 
  }

  OK(){
    this.cart++;
    localStorage.setItem('cart',this.cart.toString()); 
    console.log(parseInt(localStorage.getItem('cart')));
    this.dialogRef.close();
  }

}
