import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/models/user';
import { FilterSearchService } from 'src/app/services/user/search/filter-search.service';
import { UserSessionService } from 'src/app/services/session/user-session.service';

@Component({
  selector: 'app-user-finder',
  templateUrl: './user-finder.component.html',
  styleUrls: ['./user-finder.component.css']
})
export class UserFinderComponent implements OnInit {

  users:User[];

  @Output() selectedUser = new EventEmitter<User>();

  constructor(
    private filterSearchService: FilterSearchService,
    private sessionService: UserSessionService
  ) { }

  ngOnInit() {
  }

  search(searchQuery){
    this.filterSearchService.search(searchQuery)
    .subscribe(
      response => {
        console.log('buscando usuarios')
        console.log(response);
        this.users = <User[]>response.data;
      },
      error => {
        console.log(error);
      }
    );
  }

  onSelectedUser(user: User){
    console.log('User in UserFinder ' + user);
    this.selectedUser.emit(user);
  }

}
