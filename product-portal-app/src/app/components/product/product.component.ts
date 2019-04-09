import { Component, OnInit } from '@angular/core';
import { ProductDataService } from '../../services/product-data.service';
import { $ } from 'protractor';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private product: ProductDataService) { }

  //Detailed interfaces will be written for the data received into the variables below.
  //Should not be declared as 'any'
  public items:any = [];
  public umbrellas:any = [];

  ngOnInit() {
    this.getProductDetails();
   }
 
   private getProductDetails(){
     this.product.getProductData().subscribe(data => {
       if(data){

        this.items = data.search_response.items.Item;

        for(let i=0; i<this.items.length; i++){
          this.umbrellas.push(this.items[i]);
        }
       }
     })
   }

   productDetails(item){
     /* Here the code goes for adding the particular item into the Cart component  */
   }

}
