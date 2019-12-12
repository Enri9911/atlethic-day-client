import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorsPageComponent } from './professors-page.component';

describe('ProfessorsPageComponent', () => {
  let component: ProfessorsPageComponent;
  let fixture: ComponentFixture<ProfessorsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessorsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessorsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
