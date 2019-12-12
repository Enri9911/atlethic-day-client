import { Component, OnInit } from '@angular/core';
import { TeachersProvider } from 'src/providers/teachers-provider';

@Component({
  selector: 'app-professors-page',
  templateUrl: './professors-page.component.html',
  styleUrls: ['./professors-page.component.css']
})
export class ProfessorsPageComponent implements OnInit {

  private teachers;

  constructor(private teachersProvider: TeachersProvider) { 
    this.teachersProvider.getTeachers().subscribe(res => {
      this.teachers = res;
    })
  }

  ngOnInit() {
    
  }

}
