import { Component } from "@angular/core";
import {MatDatePickerComponent } from './mat-date-picker-component';

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  frameworkComponents;

  constructor() {
    this.frameworkComponents = { datePicker: MatDatePickerComponent };
  }

  columnDefs = [
    { field: "make" },
    { field: "model", editable: true },
    {
      field: "date",
      editable: true,
      cellEditor: "datePicker"
    }
  ];

  rowData = [
    { make: "Toyota", model: "Celica", date: new Date() },
    { make: "Ford", model: "Mondeo", date: new Date() },
    { make: "Porsche", model: "Boxter", date: new Date() }
  ];
}
