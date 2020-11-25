import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  constructor(private router: Router,
              private dataService: DataService) { }

  ngOnInit() {
    //TO ERASE WHEN SEEN

  }

  navigateToEditBooking(){
    this.router.navigate(['edit-booking']);
  }

  navigateToUsers(){
    this.router.navigate(['admin','rooms']);
  }



}
