import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-room-design',
  templateUrl: './room-design.component.html',
  styleUrls: ['./room-design.component.css']
})
export class RoomDesignComponent implements OnInit {

  message: string;

  constructor(private router: Router) { }

  ngOnInit() {
    console.log("room-design OnInit");
  }

  navigateToRoomEdit(action: string){
    this.router.navigate(['admin','rooms','room-edit'],{queryParams:{action: action}});
 }
}
