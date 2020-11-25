import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { Room } from 'src/app/model/Room';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

  action: string;
  rooms: Array<Room>;
  selectedRoom: Room;

  modalRoom:Room;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private dataService: DataService){ }

  ngOnInit() {
    /* GET MY ROOMS */
    this.dataService.getRooms().subscribe((el)=>{
      this.rooms = el;
    });

    /* SUBSCRIBE TO QUERY */
    this.route.queryParams.subscribe((params)=>{
        const id = params['id'];
        this.action = params['action'];
        if(this.action==="design"){

          if(id){
            //Cod care sa ma trimita la camera cu id-ul respectiv
            this.dataService.getRoomById(+id).subscribe(el=>{
              this.selectedRoom = el;
            });
          }

        }
      });
  }

  navigateToRoomEdit(){
     this.router.navigate(['admin','rooms','room-edit'],{queryParams:{action: "Add"}});
  }

  openRoomDesign(id: number){
    this.router.navigate(['admin','rooms'],{queryParams: {action: 'design', id: id}});
  }

  pickRoomforModal(){
    this.modalRoom = this.rooms.pop();
  }

}
