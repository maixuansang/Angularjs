import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kendo-date-picker',
  templateUrl: './kendo-date-picker.component.html',
  styleUrls: ['./kendo-date-picker.component.css']
})
export class KendoDatePickerComponent implements OnInit {
  public value: Date = new Date(2000, 2, 10);
  constructor() { }

  ngOnInit() {
  }

}
