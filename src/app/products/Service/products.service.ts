import { Injectable } from '@angular/core';
import { Product } from '../product';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  protected UrlService = "http://localhost:3000/"

  constructor(private client: HttpClient) { }

  getProducts(): Observable<Product[]>{
    console.log(this.UrlService.concat("products"));
    return this.client.get<Product[]>(this.UrlService.concat("products"));
  }

   getImagePicSum(picsumUrl:string): boolean{
    let subject = new Subject<boolean>();
     this.client.get<string>(picsumUrl).subscribe(
      imageExist => {
          if(imageExist === null){
            return false;
          }
          /* if(imageExist.includes("Image does not exist")){
            return false;

          } */
          return true;
      }
    );
    return false;
  } 
}
