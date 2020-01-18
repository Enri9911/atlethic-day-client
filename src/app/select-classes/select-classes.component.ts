import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeachersProvider } from 'src/providers/teachers-provider';
import { StudentsProvider } from 'src/providers/students-provider';
import { RacesProvider } from 'src/providers/races-provider';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-select-classes',
  templateUrl: './select-classes.component.html',
  styleUrls: ['./select-classes.component.css']
})
export class SelectClassesComponent implements OnInit {

  private professorId : string;
  private firstTimeShow : boolean = false;
  public classes;
  public students;
  public racesM;
  public racesF;
  public displayedColumns: string[] = ['name',  'select'];

  constructor(
    private _route: ActivatedRoute, 
    private teachersProvider: TeachersProvider, 
    private studentsProvider: StudentsProvider,
    private racesProvider: RacesProvider) {
      this.professorId = this._route.snapshot.paramMap.get('id');
      console.log(this.professorId);
      this.teachersProvider.getTeacherClasses(this.professorId).subscribe(res => {
        this.classes = res;
        console.log(this.classes);
      })
   }

  ngOnInit() {
  }

  getClasses(){
    // TO DO QUERY FOR CLASSES
    this.classes = undefined;
  }

  showStudents(value:any){
    this.firstTimeShow = true;
    console.log(value);
    this.studentsProvider.getStudents(value.section,value.class).subscribe(res => {
      this.students = res;
      console.log(this.students);
      this.racesProvider.getRaces(value.class,'m').subscribe(res => {
        this.racesM = res;
        console.log(this.racesM);
        for(let studentIdx in this.students){
          if(this.students[studentIdx].sex === 'M'){
            for(let raceIdx in this.racesM){
              if(this.students[studentIdx].id_race === this.racesM[raceIdx].id)
                this.students[studentIdx].raceDescription = this.racesM[raceIdx].specialityTipe;
            }
          }
        }
        console.log(this.students);
      })
      this.racesProvider.getRaces(value.class,'f').subscribe(res => {
        this.racesF = res;
        console.log(this.racesF);
        for(let studentIdx in this.students){
          if(this.students[studentIdx].sex === 'F'){
            for(let raceIdx in this.racesF){
              if(this.students[studentIdx].id_race === this.racesF[raceIdx].id)
                this.students[studentIdx].raceDescription = this.racesF[raceIdx].specialityTipe;
            }
          }
        }
        console.log(this.students);
      })
    })
  }

  updateStudentInscription(user,race){
    user.raceDescription = race.specialityTipe;
    console.log(user.id_race);
    if(user.id_race){
      var objectInscription = {
        studentId: user.id,
        raceId_new: race.id,
        raceId_old: user.id_race
      }
      this.racesProvider.raceInscription(objectInscription).subscribe(res => {
        console.log("MODIFICA");
        user.id_race = objectInscription.raceId_new;
        console.log(user);
      })
    } else {
      var objectInscriptionNew = {
        studentId: user.id,
        raceId: race.id
      }
      this.racesProvider.newRaceInscription(objectInscriptionNew).subscribe(res => {
        console.log("NUOVO");
        user.id_race = objectInscriptionNew.raceId;
        console.log(user);
      })
    }
    
  }

  deleteStudentInscription(user){
    var objectInscription = {
      studentId: user.id,
      raceId: user.id_race
    }
    console.log(objectInscription);
    this.racesProvider.deleteRaceInscription(objectInscription).subscribe(res => {
      console.log("CANCELLO");
      console.log(res);
    })
  }

}
