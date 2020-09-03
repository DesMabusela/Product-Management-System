import { Component, OnInit } from '@angular/core';
import {IProduct} from './product';
import {ProductService} from './product.service';
import {MatTableDataSource} from '@angular/material/table';

//Periodic Element Interface
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

//Populate Periodic Element Object
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit
{

  //Angular Material
  displayedColumns: string[] = ['imageUrl', 'productName','productCode','releaseDate','price','starRating'];
  dataSource;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
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

 constructor(private productService: ProductService){ 
 }

 onRatingClicked(message:string): void{
   this.pageTitle = message;
 }

 ngOnInit(): void {
  this.productService.getProducts().subscribe({
    next: products => {
      this.products = products;
      this.filteredProducts = this.products;  
      this.dataSource = new MatTableDataSource(products);
      console.log(this.dataSource);
    },
    error: err => this.errorMessage = err
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
