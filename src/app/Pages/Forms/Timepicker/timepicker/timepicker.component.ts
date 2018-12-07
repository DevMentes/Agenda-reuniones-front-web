import { Component } from '@angular/core';

@Component({
  selector: 'app-timepicker',
  templateUrl: './timepicker.component.html',
  styleUrls: ['./timepicker.component.css']
})
export class TimepickerComponent{

  time = {
    hour:new Date().getHours(),
    minute:new Date().getMinutes()
  };

  constructor() {
   }
}
