import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-founded-user',
  template: `
<button class="list-group-item list-group-item-action" (dblclick)="onSelect()" >
  <span>{{ user.email }}</span>
</button>
`
})
export class FoundedUserComponent implements OnInit {

  @Input() user: User;
  @Output() selected = new EventEmitter<User>();

  constructor() { }

  ngOnInit() {
  }

  onSelect(){
    console.log('usuario en FoundedUser ' + this.user);
    this.selected.emit(this.user);
  }

}
