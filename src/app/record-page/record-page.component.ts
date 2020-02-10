import { Component, OnInit } from '@angular/core';
import { RacesProvider } from 'src/providers/races-provider';
import { RecordProvider } from 'src/providers/record-provider';

@Component({
  selector: 'app-record-page',
  templateUrl: './record-page.component.html',
  styleUrls: ['./record-page.component.css']
})
export class RecordPageComponent implements OnInit {

  public races;
  public TFrecord;
  public TMrecord;
  public BFrecord;
  public BMrecord;

  constructor(private recordProvider: RecordProvider) { }

  ngOnInit() {
    this.inizializeRecord();
  }

  inizializeRecord(){
    this.recordProvider.getRecord('tf').subscribe(res => {
      this.TFrecord = res;
      console.log(this.TFrecord);
    })
    this.recordProvider.getRecord('tm').subscribe(res => {
      this.TMrecord = res;
    })
    this.recordProvider.getRecord('bf').subscribe(res => {
      this.BFrecord = res;
    })
    this.recordProvider.getRecord('bm').subscribe(res => {
      this.BMrecord = res;
    })
    
  }

}
