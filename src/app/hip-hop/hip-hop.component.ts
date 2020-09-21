import { Component, OnInit, ViewChild } from '@angular/core';
import {IProduct} from './product';
import {ProductService} from './product.service';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog'; 
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort'; 
import { ProductDetailComponent } from '../products/product-detail.component';

@Component({
  selector: 'hiphop',
  templateUrl: './hip-hop.component.html',
  styleUrls: ['./hip-hop.component.css']
})
export class HipHopComponent implements OnInit {

  displayedColumns: string[] = ['imageUrl', 'productName','productCode','releaseDate','price','starRating'];
  dataSource: any;
  pageTitle:string = 'Hip Hop Albums';
  showImage: boolean = true;
  products: IProduct[];
  filteredProducts: IProduct[];
  errorMessage: string;
  isChecked = true;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private productService: ProductService,public dialog: MatDialog) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: products => {
        this.products = products;
        this.filteredProducts = this.products;  
        this.dataSource = new MatTableDataSource(products);
        console.log(this.dataSource);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: err => this.errorMessage = err
    });
  
  
  } 

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  openDialog(row): void {
    const dialogRef = this.dialog.open(ProductDetailComponent, {
      width: '50%',
      data: row
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed'); 
    });
  }
  toggleImage():void{
    this.showImage = !this.showImage;
  }
  performFilter(filterBy:string):IProduct[]{

    filterBy = filterBy.toLocaleLowerCase();
    
    return this.products.filter((product:IProduct) =>
      product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }
  
}
