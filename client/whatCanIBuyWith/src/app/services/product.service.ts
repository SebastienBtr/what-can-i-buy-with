import { Injectable } from '@angular/core';

import { ApiService } from "./api.service";

@Injectable()
export class ProductService {

  prefix : string = "/api";
  domain : string = "http://localhost:3000";
  //TODO add domain in a config file and import it

  constructor(private apiService: ApiService  ) {
  }

  getProducts() {
    return this.apiService.get(this.domain+this.prefix+"/products");
  }
}
