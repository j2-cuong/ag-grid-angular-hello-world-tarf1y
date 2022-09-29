import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {MatDatePickerComponent } from './mat-date-picker-component';
import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
    MatFormFieldModule, MatInputModule,
} from "@angular/material";

@NgModule({
  imports:      [ BrowserModule, FormsModule, AgGridModule.withComponents([]), MatDatepickerModule, MatNativeDateModule, BrowserAnimationsModule, MatFormFieldModule, MatInputModule ],
  declarations: [ AppComponent, MatDatePickerComponent ],
  bootstrap:    [ AppComponent ],
  entryComponents: [MatDatePickerComponent]
})
export class AppModule { }
