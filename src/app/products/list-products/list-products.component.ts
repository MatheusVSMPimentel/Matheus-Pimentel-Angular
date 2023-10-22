import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../Service/products.service';
import { Product } from '../product';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: [ './list-products.component.css'
  ]
})
export class ListProductsComponent implements OnInit {

  public products: Product[] | undefined;

  constructor(private productService: ProductsService){

  }


  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      products => {
        this.products = products;
        console.log(products);
      },
      error=>{
        console.log(error)
      }
    )
  }

  generatePicsumUrl(): string{
    let generatePicsumUrl: string = "";
    generatePicsumUrl = `https://picsum.photos/id/${this.getRandomNumber()}/200/200`;

    return generatePicsumUrl
  } 

  getRandomNumber(): number {
    const min = 0;
    const max = 316;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
