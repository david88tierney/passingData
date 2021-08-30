import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerElementComponent } from './server-element/server-element.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildOneComponent } from './components/parent/child-one/child-one.component';
import { ChildTwoComponent } from './components/parent/child-two/child-two.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import { OutputEventPracticeComponent } from './components/parent/output-event-practice/output-event-practice.component';

@NgModule({
  declarations: [
    AppComponent,
    CockpitComponent,
    ServerElementComponent,
    ParentComponent,
    ChildOneComponent,
    ChildTwoComponent,
    OutputEventPracticeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
