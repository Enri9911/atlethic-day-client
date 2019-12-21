import { Component, OnInit } from '@angular/core';
import { RacesProvider } from 'src/providers/races-provider';

@Component({
  selector: 'app-record-page',
  templateUrl: './record-page.component.html',
  styleUrls: ['./record-page.component.css']
})
export class RecordPageComponent implements OnInit {

  public races;

  constructor(private racesProvider: RacesProvider) { }

  ngOnInit() {
    this.inizializeRaces();
  }

  inizializeRaces(){
    this.racesProvider.getAllRaces().subscribe(res => {
      this.races = res;
      console.log(this.races);
    })
  }

}
