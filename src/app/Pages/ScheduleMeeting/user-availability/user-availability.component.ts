import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserAvailability } from './UserAvailability';

@Component({
  selector: 'app-user-availability',
  template: `
  <button type="button"
  *ngIf="userAvailability"
  class="list-group-item list-group-item-action" 
  [class.list-group-item-success]="userAvailability.isAvailable === true"
  [class.list-group-item-danger]="userAvailability.isAvailable === false"
  >
  {{ userAvailability.user.email }}
  </button>
  `
})
export class UserAvailabilityComponent implements OnInit {

  @Input() userAvailability: UserAvailability;

  constructor() { }

  ngOnInit() {
  }

}
