import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_BACKEND } from './url-provider';

@Injectable()
export class RacesProvider{
    
    constructor(private httpClient: HttpClient){
    }

    getRaces(classField,sex){
        var queryString = '/race/';
        if(classField>2){
            queryString = queryString + 't'
        } else {
            queryString = queryString + 'b'
        }
        queryString = queryString + sex;
        queryString = queryString.toLocaleLowerCase();
        console.log(queryString);

        return this.httpClient.get(URL_BACKEND+queryString);
    }

    getAllRaces(){
        return this.httpClient.get(URL_BACKEND+'/race');
    }

}