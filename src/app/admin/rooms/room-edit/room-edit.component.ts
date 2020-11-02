import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-room-edit',
  templateUrl: './room-edit.component.html',
  styleUrls: ['./room-edit.component.css']
})
export class RoomEditComponent implements OnInit {

  message: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
     this.route.queryParams.subscribe((params)=>{
         const action= params['action'];
         if(action){
            this.message = action;
         }
     });
}
}
