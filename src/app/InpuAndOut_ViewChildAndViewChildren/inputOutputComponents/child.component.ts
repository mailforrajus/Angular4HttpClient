import { Component,Input, Output, EventEmitter } 
            from "@angular/core";
@Component({
    selector:"child",
    templateUrl:"./child.component.html"
})
export class childComponent{
    @Input('_id') p_id;
    @Input('_name') p_name;
    @Input('_cost') p_cost;

    @Output() sendData:EventEmitter<any> 
                    = new EventEmitter();
/*    
        EventEmitter is the Predefined Event
        EventEmitter class available in @angular/core
        EventEmitter helps to share the data 
        from childComponent to parentComponent
    
*/
    public clickMe():any{
        this.sendData.emit(this.p_id+"...."+
                          this.p_name+"...."+
                          this.p_cost);
        //emit() is the predefined function
        /*emit() function used to fire the @output()
        related event*/
    };
};