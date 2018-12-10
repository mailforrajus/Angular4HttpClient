import {  HttpInterceptor, HttpRequest,HttpHandler, HttpEvent } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class myInterceptor implements HttpInterceptor{

    intercept(req:HttpRequest<any>, handler:HttpHandler):Observable<HttpEvent<any>>{
        console.log("inside interceptor");
         var req1=req.clone({setHeaders:{"data":"config"}})
        return handler.handle(req);
    };
};