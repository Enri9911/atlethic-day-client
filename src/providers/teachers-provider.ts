import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_BACKEND } from './url-provider';

@Injectable()
export class TeachersProvider {

    private url = URL_BACKEND; //backend route

    constructor(private httpClient: HttpClient){
    }

    public getTeachers() {
        return this.httpClient.get(this.url + '/teacher');
    }

    public getTeacherClasses(id){
        return this.httpClient.get(this.url + '/class/'+id)
    }

}