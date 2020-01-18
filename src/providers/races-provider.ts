import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_BACKEND } from './url-provider';

@Injectable()
export class RacesProvider{
    
    constructor(private httpClient: HttpClient){
    }

    getRaces(classField,sex){
        var queryString = '/races/';
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
        return this.httpClient.get(URL_BACKEND+'/races');
    }

    newRaceInscription(object){
        return this.httpClient.post(URL_BACKEND+'/inscriptions',object);
    }

    raceInscription(object){
        return this.httpClient.put(URL_BACKEND+'/inscriptions',object);
    }

    deleteRaceInscription(object){
        console.log(object);
        return this.httpClient.delete(URL_BACKEND+'/inscriptions/' + object.studentId + '/' + object.raceId);
    }

}