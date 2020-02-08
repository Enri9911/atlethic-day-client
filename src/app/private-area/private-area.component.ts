import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-private-area',
  templateUrl: './private-area.component.html',
  styleUrls: ['./private-area.component.css']
})
export class PrivateAreaComponent implements OnInit {

  public displayedColumns: string[] = ['name', 'download'];
  dataSource = [
    {icon: true, name:'PROVA BESTIA', download:'LINKDOWNLOAD'},
    {icon: true, name:'PROVA BESTIA', download:'LINKDOWNLOAD'},
    {icon: true, name:'PROVA BESTIA', download:'LINKDOWNLOAD'},
    {icon: true, name:'PROVA BESTIA', download:'LINKDOWNLOAD'},
    {icon: true, name:'PROVA BESTIA', download:'LINKDOWNLOAD'},
    {icon: true, name:'PROVA BESTIA', download:'LINKDOWNLOAD'},
    {icon: true, name:'PROVA BESTIA', download:'LINKDOWNLOAD'},
    {icon: true, name:'PROVA BESTIA', download:'LINKDOWNLOAD'},
    {icon: true, name:'PROVA BESTIA', download:'LINKDOWNLOAD'},
    {icon: true, name:'PROVA BESTIA', download:'LINKDOWNLOAD'},
    {icon: true, name:'PROVA BESTIA', download:'LINKDOWNLOAD'},
    {icon: true, name:'PROVA BESTIA', download:'LINKDOWNLOAD'},
    {icon: true, name:'PROVA BESTIA', download:'LINKDOWNLOAD'},
    {icon: true, name:'PROVA BESTIA', download:'LINKDOWNLOAD'},
    {icon: true, name:'PROVA BESTIA', download:'LINKDOWNLOAD'},
    {icon: true, name:'PROVA BESTIA', download:'LINKDOWNLOAD'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
