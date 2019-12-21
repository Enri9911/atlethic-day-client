import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_BACKEND } from './url-provider';

@Injectable()
export class StudentsProvider {

    private url = URL_BACKEND;

    constructor(private httpClient: HttpClient){
    }

    getStudents(sectionField,classField ){
        return this.httpClient.get(this.url + '/student/' + classField + '' + sectionField)
    }

    registerRaceForStudent(user,race){
        // return this.httpClient.post('')
    }
    

}