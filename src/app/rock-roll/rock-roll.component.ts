import { Component, OnInit, ViewChild } from '@angular/core';
import {IRockRoll} from './rockroll';
import {RockrollService} from './rockroll.service';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog'; 
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort'; 
import { ProductDetailComponent } from '../products/product-detail.component';


@Component({
  selector: 'rockroll',
  templateUrl: './rock-roll.component.html',
  styleUrls: ['./rock-roll.component.css']
})
export class RockRollComponent implements OnInit {
  displayedColumns: string[] = ['imageUrl', 'productName','productCode','releaseDate','price','starRating'];
  dataSource: any;
  pageTitle:string = 'Rock n Roll Albums';
  showImage: boolean = true;
  rockroll: IRockRoll[];
  filteredRockRoll: IRockRoll[];
  errorMessage: string;
  isChecked = true; 
  

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private rockrollService: RockrollService,public dialog: MatDialog) {

   }

  ngOnInit(): void {
    this.rockrollService.getProducts().subscribe({
      next: products => {
        this.rockroll = products;
        this.filteredRockRoll = this.rockroll;  
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
  performFilter(filterBy:string):IRockRoll[]{

    filterBy = filterBy.toLocaleLowerCase();
    
    return this.rockroll.filter((product:IRockRoll) =>
      product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }
  
}
