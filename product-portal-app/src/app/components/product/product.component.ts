import { Component, OnInit } from '@angular/core';
import { ProductDataService } from '../../services/product-data.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private product: ProductDataService) { }

  public items = [];
  public umbrellas = [];

  ngOnInit() {
    this.getProductDetails();
   }
 
   private getProductDetails(){
     this.product.getProductData().subscribe(data => {
       if(data){
        console.log(data.search_response.items);
        console.log(data.search_response.items.Item[0].images[0].base_url);

        this.items = data.search_response.items.Item;

        for(let i=0; i<this.items.length; i++){
          this.umbrellas.push(this.items[i]);
        }

        console.log(this.umbrellas[0].images[0].base_url +this.umbrellas[0].images[0].primary );
        console.log(typeof(this.umbrellas));
       }
     })
   }

}
