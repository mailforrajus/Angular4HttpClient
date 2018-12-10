import { Pipe,PipeTransform } from "@angular/core";
@Pipe({
    name:"reverse"
})
export class reversePipe implements PipeTransform{
    transform(arg1){
        var data:string="";
        for(var i:number=0;i<arg1.length;i++){
            data = arg1[i]+data;
        };
        //console.log(data)
        return data;
    };
};