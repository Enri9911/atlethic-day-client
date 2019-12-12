import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_BACKEND } from './url-provider';

@Injectable()
export class LoginProvider {

    private url = URL_BACKEND; //backend route

    constructor(private httpClient: HttpClient){
    }

}