import { Component, OnInit } from '@angular/core';
import { TeachersProvider } from 'src/providers/teachers-provider';
import { RacesProvider } from 'src/providers/races-provider';

@Component({
  selector: 'app-private-area',
  templateUrl: './private-area.component.html',
  styleUrls: ['./private-area.component.css']
})
export class PrivateAreaComponent implements OnInit {

  public displayedColumns: string[] = ['name','modify','delete'];
  public teachers;
  public races;
  public raceSelected;
  public searchValue = '';

  constructor(private teachersProvider: TeachersProvider, private racesProvider: RacesProvider) { }

  ngOnInit() {
    this.teachersProvider.getTeachers().subscribe(res => {
      console.log(res);
      this.teachers = res;
    })
    this.racesProvider.getAllRaces().subscribe(res => {
      console.log(res);
      this.races = res;
    })
  }

  selectRace(race){
    //TODO CHIAMATA PER SCARICARE;
    this.raceSelected = 'PROVA';
  }

}
