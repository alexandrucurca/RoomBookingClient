import { Route } from '@angular/compiler/src/core';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Room } from 'src/app/model/Room';

@Component({
  selector: 'app-room-design',
  templateUrl: './room-design.component.html',
  styleUrls: ['./room-design.component.css']
})
export class RoomDesignComponent implements OnInit {

  @Input()
  room: Room;

  message: string;

  constructor(private router: Router) { }

  ngOnInit() {
    console.log("room-design OnInit");
  }

  navigateToRoomEdit(){
    this.router.navigate(['admin','rooms','room-edit'],{queryParams:{action: 'Edit', id:this.room.id}});
 }


}
