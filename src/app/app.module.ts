import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { KendoInputDateComponent } from './kendo-input-date/kendo-input-date.component';
import { EventLogComponent } from './event-log/event-log.component';
import { KendoDatePickerComponent } from './kendo-date-picker/kendo-date-picker.component';
import { UiModule } from './ui/ui.module';



@NgModule({
  declarations: [
    AppComponent,
    KendoInputDateComponent,
    EventLogComponent,
    KendoDatePickerComponent
  ],
  imports: [
    BrowserModule,
    DateInputsModule,
    BrowserAnimationsModule,
    UiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
