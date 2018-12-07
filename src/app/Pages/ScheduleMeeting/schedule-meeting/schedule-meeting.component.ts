import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { ScheduleMeetingDateForm } from 'src/app/models/ScheduleMeetingDateForm';
import { UserAvailability } from '../user-availability/UserAvailability';
import { ScheduleService } from 'src/app/services/meetings/schedule.service';

@Component({
  selector: 'app-schedule-meeting',
  templateUrl: './schedule-meeting.component.html',
  styleUrls: ['./schedule-meeting.component.css']
})
export class ScheduleMeetingComponent implements OnInit {

  form = new ScheduleMeetingDateForm();

  selected_User: User;

  usersToInvite : UserAvailability[];

  constructor(
    private scheduleService: ScheduleService
  ) { }

  ngOnInit() {
  }

  onSelectedUser(user: User){
    console.log('User en ScheduleMeetingComponent ' + user);
    this.selected_User = user;
  }

  setUsersToInvite(users: UserAvailability[]){
    console.log('setting users to invite');
    console.log(users);
    this.usersToInvite = users;
  }

  schedule(){
    console.log('schedule method');
    console.log(this.form.date);
    console.log(this.form.startAt);
    console.log(this.form.finishAt);
    console.log(this.usersToInvite);
    this.scheduleService.schedule(this.usersToInvite, this.form.date, this.form.startAt, this.form.finishAt)
    .subscribe(
      response => {
        if(response){
          console.log(response);
          alert('Reunión agendada correctamente');
        }
        
        
      },
      error => {
        alert(error);
        console.log(error);
      }
    );
  }

}