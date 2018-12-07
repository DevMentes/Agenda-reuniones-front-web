import { Component, OnInit } from '@angular/core';
import { RestrictService } from 'src/app/services/RestrictHours/restrict.service';


@Component({
  selector: 'app-restrict-hours',
  templateUrl: './restrict-hours.component.html',
  styleUrls: ['./restrict-hours.component.css']
})
export class RestrictHoursComponent implements OnInit {

 
 public startAt: any;
 public finishAt: any;

 options = [
   {name:'Lunes', value:'Monday', checked: false},
   {name:'Martes', value:'Tuesday', checked: false},
   {name:'Miercoles', value:'Wednesday', checked: false},
   {name:'Jueves', value:'Thursday', checked: false},
   {name:'Viernes', value:'Friday', checked: false},
   {name:'Sabado', value:'Saturday', checked: false},
   {name:'Domingo', value:'Sunday', checked: false}
  ];

  constructor(
    private restrictService: RestrictService
  ) { }

  ngOnInit() {
  }

  get selectedOptions(){
    let days = this.options.filter(opt => opt.checked).map(opt => opt.value);
    return days;
  }

  bloquear(){
    let selectedDays = this.selectedOptions;
    
    let response = this.restrictService.restrict(selectedDays, this.startAt, this.finishAt);
    console.log(response);
  }

}
