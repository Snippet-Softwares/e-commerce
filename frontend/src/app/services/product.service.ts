import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private  SERVER_URL = environment.SERVER_URL;
  constructor(private  http: HttpClient) { }

  /* fetch all products from backend */

  getAllProducts( numberOfResults = 10) {
    return this.http.get<any>(this.SERVER_URL + '/products', {
      params: {
        limit: numberOfResults.toString()
      }
    });
  }

}
