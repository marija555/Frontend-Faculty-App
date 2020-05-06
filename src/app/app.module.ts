import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { VoziloComponent } from './components/primer-components/vozilo/vozilo.component';
import { AutomobilComponent } from './components/primer-components/automobil/automobil.component';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatExpansionModule } from '@angular/material/expansion';
import { HomeComponent } from './components/core/home/home.component';
import { AutorComponent } from './components/core/autor/autor.component';
import { AboutComponent } from './components/core/about/about.component';
import { StatusComponent } from './components/status/status.component';
import { FakultetComponent } from './components/fakultet/fakultet.component';
import { DepartmanComponent } from './components/departman/departman.component';
import { StudentComponent } from './components/student/student.component';

@NgModule({
  declarations: [
    AppComponent,
    VoziloComponent,
    AutomobilComponent,
    HomeComponent,
    AutorComponent,
    AboutComponent,
    StatusComponent,
    FakultetComponent,
    DepartmanComponent,
    StudentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule ,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
