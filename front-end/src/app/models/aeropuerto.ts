export class Aeropuerto {
    _id?: number;
    airport: string;    
    city: string;
    country: string;
    iata: string;
    lat: string;        
    long: string;        
    state: string;            
    constructor(airport: string,city: string,country: string,iata: string,lat: string,long: string,state: string){
        this.airport=airport;
        this.city=city;
        this.country=country;
        this.iata=iata;
        this.lat=lat;
        this.long=long;
        this.state=state;        
    }
}