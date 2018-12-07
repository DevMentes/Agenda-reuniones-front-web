import {Component, OnInit, ViewChild} from '@angular/core';
import { CalendarComponent } from 'ng-fullcalendar';
import { Options } from 'fullcalendar';
import { EventService } from '../../services/event/event.service';

const now = new Date();
export interface Time {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-private-page',
  templateUrl: './private-page.component.html',
  styleUrls: ['./private-page.component.css']
})
export class PrivatePageComponent implements OnInit {

  calendarOptions: Options;
  displayEvent: any;

  times: Time[] = [
    {value: '0', viewValue: '00:00 AM'},
    {value: '1', viewValue: '00:30 AM'},
    {value: '2', viewValue: '01:00 AM'}
  ];

  @ViewChild(CalendarComponent) ucCalendar: CalendarComponent;
  constructor(
    protected eventService: EventService
  ) { }


  ngOnInit() {
    this.eventService.getEvents().subscribe(data => {
      this.calendarOptions = {
        editable: true,
        eventLimit: false,
        locale: "es",
        selectable: true,
        header: {
          left: 'prev,next today',
          center: 'CIISA ',
          right: 'month,agendaWeek,agendaDay,listMonth'
        },
        events: data
      };
    });
  }
  clickButton(model: any) {
    this.displayEvent = model;

  }
  eventClick(model: any) {
    model = {
      event: {
        id: model.event.id,
        start: model.event.start,
        end: model.event.end,
        title: model.event.title,
        allDay: model.event.allDay
        // other params
      },
      duration: {}
    }
    this.displayEvent = model;
  }
  updateEvent(model: any) {
    model = {
      event: {
        id: model.event.id,
        start: model.event.start,
        end: model.event.end,
        title: model.event.title
        // other params
      },
      duration: {
        _data: model.duration._data
      }
    }
    this.displayEvent = model;
  }

}
