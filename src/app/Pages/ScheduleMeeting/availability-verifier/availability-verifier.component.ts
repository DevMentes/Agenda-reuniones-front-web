import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserAvailability } from '../user-availability/UserAvailability';
import { VerifyAvailabilitiesService } from 'src/app/services/verify_availabilities/verify-availabilities.service';
import { ScheduleMeetingDateForm } from 'src/app/models/ScheduleMeetingDateForm';

@Component({
  selector: 'app-availability-verifier',
  templateUrl: './availability-verifier.component.html',
  styleUrls: ['./availability-verifier.component.css']
})
export class AvailabilityVerifierComponent implements OnInit {

  usersAvailabilities: UserAvailability[];

  @Output() usersForMeeting = new EventEmitter<UserAvailability[]>();

  users: Array<User> = [];

  @Input() dateForm: ScheduleMeetingDateForm;

  @Input() 
  set userToVerify(user: User){
    if (!user) {
      return;
   }
    if (user) { 
      this.users.push(user); 
   }    
    this.verifyAvailabilitiesService.verify(this.users, this.dateForm.date, this.dateForm.startAt, this.dateForm.finishAt)
    .subscribe(
      response => {
        this.usersAvailabilities = <UserAvailability[]>response.data;
        console.log('users before to emit');
        console.log(this.usersAvailabilities);
        this.usersForMeeting.emit(this.usersAvailabilities);
      },
      error => {
        console.log(error);
      }
    );
    
  }

  constructor(
    private verifyAvailabilitiesService: VerifyAvailabilitiesService
  ) { }

  ngOnInit() {
  }

  

}
