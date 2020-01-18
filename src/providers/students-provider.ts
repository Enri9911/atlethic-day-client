import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_BACKEND } from './url-provider';
import { RacesProvider } from './races-provider';

@Injectable()
export class StudentsProvider {

    private url = URL_BACKEND;

    constructor(private httpClient: HttpClient, private racesProvider: RacesProvider){
    }

    getStudents(sectionField,classField ){
        return this.httpClient.get(this.url + '/students/' + classField + '' + sectionField)
    }

    setStudentRace(stuentId,raceId){
        var inscriptionObject = {
            studentId : stuentId,
            raceId: raceId
        }
        this.racesProvider.raceInscription(inscriptionObject);
    }
    

}