import { Component, OnInit } from '@angular/core';
import { TeachersProvider } from 'src/providers/teachers-provider';
import { Router } from '@angular/router';

@Component({
  selector: 'app-professors-page',
  templateUrl: './professors-page.component.html',
  styleUrls: ['./professors-page.component.css']
})
export class ProfessorsPageComponent implements OnInit {

  public teachers;

  constructor(private teachersProvider: TeachersProvider, private router: Router) { 
    this.teachersProvider.getTeachers().subscribe(res => {
      this.teachers = res;
    })
  }

  ngOnInit() {
    
  }

  goToClasses(id){
    this.router.navigate(['/classes',id])
  }

}
