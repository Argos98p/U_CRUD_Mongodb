export class Avion {
    _id?: number;
    aircraft_type:string;
    engine_type:string;
    issue_date:string;
    manufacturer:string;
    model:string;
    status:string;
    tailnum:string;
    type:string;
    year:string;   
    constructor(aircraft_type:string,engine_type:string,issue_date:string,manufacturer:string,model:string,status:string,tailnum:string,type:string,year:string){
        this.aircraft_type=aircraft_type;
        this.engine_type=engine_type;
        this.issue_date=issue_date;
        this.manufacturer=manufacturer;
        this.model=model;
        this.status=status;
        this.tailnum=tailnum;
        this.type=type;
        this.year=year;
    }
}