export class Aerolinea {
    _id?: number;
    Code:string;
    Description:string;
    
    constructor(Code:string,Description:string){
        this.Code=Code;
        this.Description=Description;
    }
}