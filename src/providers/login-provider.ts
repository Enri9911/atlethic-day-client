import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { URL_BACKEND } from './url-provider';

@Injectable()
export class LoginProvider {

    private url = URL_BACKEND; //backend route

    constructor(private httpClient: HttpClient){
    }

    login(username,password){
        var userLoginObject = {
            username: username,
            password: password
        }
        return this.httpClient.post(URL_BACKEND + '/login',userLoginObject).subscribe((res:any) => {
            console.log(res);
            localStorage.setItem('auth-token',res);
            console.log("SETTATO IN LOCALSTORAGE IL TOKEN");
            return true;
        },
        error => {
            console.log(error);
            return false;
        })
    }
}