import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginPageComponent } from './login-page/login-page.component';

import {
  MatButtonModule, MatCardModule, MatDialogModule, MatInputModule, MatTableModule,
  MatToolbarModule, MatMenuModule,MatIconModule, MatProgressSpinnerModule, MatSidenavModule, MatCardAvatar, MatOptionModule, MatSelectModule
} from '@angular/material';
import { ProfessorsPageComponent } from './professors-page/professors-page.component';
import { LoginProvider } from 'src/providers/login-provider';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TeachersProvider } from 'src/providers/teachers-provider';
import { SelectClassesComponent } from './select-classes/select-classes.component';
import { NavbarComponent } from './navbar/navbar.component';
import { StudentsProvider } from 'src/providers/students-provider';
import { RacesProvider } from 'src/providers/races-provider';
import { RecordPageComponent } from './record-page/record-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    ProfessorsPageComponent,
    SelectClassesComponent,
    NavbarComponent,
    RecordPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatDialogModule,
    MatTableModule,
    MatMenuModule,
    MatIconModule,
    MatSidenavModule,
    MatOptionModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    LoginProvider,
    RacesProvider,
    TeachersProvider,
    StudentsProvider,
    HttpClient,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
