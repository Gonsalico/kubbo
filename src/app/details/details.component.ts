import { Component, OnInit } from '@angular/core';
import { ProductsMockService } from "../../assets/mocks/products-mock.service";
import { ActivatedRoute } from '@angular/router';
import { StockModel } from 'src/assets/models/stock.model';
import { ProductModel } from 'src/assets/models/product.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  private sub: any;
  idProduct: number;
  stockList: StockModel[];
  currentProduct: ProductModel;
  displayedColumns: String[] = ['cityWarehouse', 'countryWarehouse', 'nameWarehouse', 'quantity', 'status'];

  constructor(
    private productService: ProductsMockService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.idProduct = +params['id'];
    });
    this.stockList = this.productService.getStock(this.idProduct);
    this.getCurrentProduct();
  }

  getCurrentProduct(){
    this.currentProduct = this.productService.getProduct(this.idProduct);
  }

  statusChange(event: any){
    this.productService.changeStatus(this.idProduct, event.checked);
  }

  requirementChange(value: boolean, idRadio: number){
    console.log(this.idProduct);
    console.log(idRadio);
    this.productService.changeRequirement(this.idProduct, idRadio, value)
  }

}
