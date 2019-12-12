import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeachersProvider } from 'src/providers/teachers-provider';
import { StudentsProvider } from 'src/providers/students-provider';

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
  public displayedColumns: string[] = ['name', 'class_name', 'sex'];

  constructor(private _route: ActivatedRoute, private teachersProvider: TeachersProvider, private studentsProvider: StudentsProvider) {
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
    })
  }

}
