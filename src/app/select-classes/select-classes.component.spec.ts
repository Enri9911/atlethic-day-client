import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectClassesComponent } from './select-classes.component';

describe('SelectClassesComponent', () => {
  let component: SelectClassesComponent;
  let fixture: ComponentFixture<SelectClassesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectClassesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectClassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
