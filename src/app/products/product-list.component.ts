import { Component, OnInit, ViewChild } from '@angular/core';
import {IProduct} from '../hip-hop/product'; 
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ProductDetailComponent } from './product-detail.component';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort'; 

@Component({
  selector: 'products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit
{

  //Angular Material
  displayedColumns: string[] = ['imageUrl', 'productName','productCode','releaseDate','price','starRating'];
  dataSource: any;
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  //Bootstrap Table
  pageTitle:string = 'Product List';
  showImage: boolean = false;
  errorMessage: string;

  private _listFilter: string;

  get listFilter(): string{
    return this._listFilter;
  }
  
  set listFilter(value:string){
    
    this._listFilter=value;

    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter):this.products;
  }

  filteredProducts: IProduct[];

  products: IProduct[];

 constructor(){ 
 }
 openDialog(row): void {
  // const dialogRef = this.dialog.open(ProductDetailComponent, {
  //   width: '50%',
  //   data: row
  // });

  // dialogRef.afterClosed().subscribe(result => {
  //   console.log('The dialog was closed'); 
  // });
}



 onRatingClicked(message:string): void{
   this.pageTitle = message;
 }
 SelectedRow(row){
  console.log(row);
 }
 ngOnInit(): void {
  // this.productService.getProducts().subscribe({
  //   next: products => {
  //     this.products = products;
  //     this.filteredProducts = this.products;  
  //     this.dataSource = new MatTableDataSource(products);
  //     console.log(this.dataSource);
  //     this.dataSource.paginator = this.paginator;
  //     this.dataSource.sort = this.sort;
  //   },
  //   error: err => this.errorMessage = err
  // });


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
