import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import {  customerComponent} from "./components/custmer.component";
//import {  customerService} from "./services/customer.service";
//import {  HttpClientModule, HTTP_INTERCEPTORS} from "@angular/common/http";
//import {  myInterceptor } from "./interceptors/my.interceptor";
import { AppComponent } from './app.component';
//import {  reversePipe} from "./Pipes/reverse.pipe";
import {childComponent  } from "./InpuAndOut_ViewChildAndViewChildren/inputOutputComponents/child.component";
import {parentComponent  } from "./InpuAndOut_ViewChildAndViewChildren/inputOutputComponents/parent.component";

@NgModule({
  declarations: [
    AppComponent,parentComponent, childComponent
    //,customerComponent,reversePipe
  ],
  imports: [
    BrowserModule
    //,HttpClientModule
  ],
  providers: [
    //customerService,{
   // provide:HTTP_INTERCEPTORS,useClass:myInterceptor,multi:true
//  }
],
  bootstrap: [parentComponent]
})
export class AppModule { }
