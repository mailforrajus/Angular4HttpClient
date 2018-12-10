import { Component } from "@angular/core";
import { customerService } from "../services/customer.service";
import { HttpErrorResponse } from "@angular/common/http";


@Component({
    selector:"customerInfo",
    templateUrl:"customer.component.html"
})

export class customerComponent{
        private result:any;
        private helloString:string="Hello";
        private money:number=5000;
        private value:number=100.12345;
        private valueInPercentage:number=0.9;
        private customersSubscribe:any;

    constructor(private _service:customerService){}

    ngOnInit(){
        this.customersSubscribe=this._service.getAllCustomerInfo().subscribe(this._successCallBack, this._errorCallBack);
    };

    public _successCallBack=(res)=>{
        this.result=res;
    };

    public _errorCallBack=(err:HttpErrorResponse)=>{
        if(err.error  instanceof Error){
            console.log("Client Side errors.");
        }else{
            console.log("server side error...");
        }
    };
    ngOnDestroy(){
        this.customersSubscribe.unsubscibe();
    };
};