import { Component, OnInit,ViewEncapsulation  } from '@angular/core';
import { IntlService } from '@progress/kendo-angular-intl';
@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-kendo-input-date',
  templateUrl: './kendo-input-date.component.html',
  styleUrls: ['./kendo-input-date.component.css']
})
export class KendoInputDateComponent implements OnInit {
  public events: string[] = [];
  public value: Date = new Date();

  constructor(private intl: IntlService) { }

  ngOnInit() {
  }


  public onBlur(): void {
    this.log('blur');
  }

  public onFocus(): void {
    this.log('focus');
  }

  public onChange(value: Date): void {
    this.log('change', value);
  }

  private log(event: string, value?: Date): void {
    this.events = [`${event}${this.formatValue(value)}`].concat(this.events);
  }

  private formatValue(value?: Date): string {
    return value ? ` - ${this.intl.formatDate(value, 'd')}` : '';
  }
}
