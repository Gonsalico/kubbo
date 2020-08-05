import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductModel } from '../../assets/models/product.model';
import { ProductsMockService } from "../../assets/mocks/products-mock.service";
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  
  products: ProductModel[];
  dataSource: any;
  displayedColumns: String[] = ['name', 'sku', 'barcode', 'image'];

  constructor(private productService: ProductsMockService) { }

  ngOnInit(): void {
    this.getProducts();
    this.dataSource = new MatTableDataSource<ProductModel>(this.products);
    this.dataSource.paginator = this.paginator;
  }

  getProducts(){
    this.products = this.productService.getProducts();
  }

  statusChange(event: any, id: number){
    this.productService.changeStatus(id, event.checked);
  }

}
