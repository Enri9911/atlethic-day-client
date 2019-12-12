import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-select-classes',
  templateUrl: './select-classes.component.html',
  styleUrls: ['./select-classes.component.css']
})
export class SelectClassesComponent implements OnInit {

  private professorId : string;
  private firstTimeShow : boolean = false;
  public classes : string[] = ['4M','5M','6M'];
  public students : any[];
  public displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];

  constructor(private _route: ActivatedRoute) {
      this.professorId = this._route.snapshot.paramMap.get('id');
      console.log(this.professorId);
      // this.getClasses();
   }

  ngOnInit() {
  }

  getClasses(){
    // TO DO QUERY FOR CLASSES
    this.classes = undefined;
  }

  showStudents(value){
    this.firstTimeShow = true;
    console.log(value);
    // TO DO CARICO STUDENTI
    this.students = [
      {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
      {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
      {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
      {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
      {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
      {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
      {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
      {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
      {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
      {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
    ];
    console.log(this.students);
  }

}
