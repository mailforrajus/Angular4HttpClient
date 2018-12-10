import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()

export class customerService{

    constructor(private _httpClient:HttpClient){}

    public getAllCustomerInfo():any{
                  return this._httpClient.get("https://www.w3schools.com/angular/customers.php");
    };
};