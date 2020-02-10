import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_BACKEND } from './url-provider';
import { RacesProvider } from './races-provider';

@Injectable()
export class RecordProvider {

    private url = URL_BACKEND + '/record'
    constructor(private httpClient: HttpClient){ }

    getRecord(param){
        //param => tm / tf / bm / bf
        return this.httpClient.get(this.url + '/' + param);
    }

    getAllRecord(){
        return this.httpClient.get(this.url);
    }
}