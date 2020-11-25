import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Booking } from './model/Booking';
import { Layout } from './model/Layout';
import { Room } from './model/Room';
import { RoomLayout } from './model/RoomLayout';
import { User } from './model/User';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  users = new Array<User>();
  rooms =  new Array<Room>();
  bookings = new Array<Booking>();
  layouts =  new Array<Layout>();

  constructor() {
    /* USERS */
    const user1 = new User();
    user1.id = 1;
    user1.username = "curca.alexandru";
    user1.password = "secret";
    user1.name = "curca";
    user1.role = true;

    const user2 = new User();
    user2.id = 2;
    user2.username = "dorobat.bogdan";
    user2.password = "secret";
    user2.name = "dorobat";
    user2.role = true;

    const user3 = new User();
    user3.id = 3;
    user3.username = "mintar.mirel";
    user3.password = "secret";
    user3.name = "mintar";
    user3.role = false;

    this.users.push(user1);
    this.users.push(user2);
    this.users.push(user3);

    /* LAYOUTS */
    const layout1 = new Layout();
    layout1.id = 1;
    layout1.name = "U-Shape";

    const layout2 = new Layout();
    layout2.id = 2;
    layout2.name = "Board Meeting";

    const layout3 = new Layout();
    layout3.id = 3;
    layout3.name = "Theater";

    this.layouts.push(layout1);
    this.layouts.push(layout2);
    this.layouts.push(layout3);

    /* ROOMLAYOUTS */
    const roomlayout1 = new RoomLayout();
    roomlayout1.layout=layout1;
    roomlayout1.capacity=15;

    const roomlayout2 = new RoomLayout();
    roomlayout2.layout=layout2;
    roomlayout2.capacity=20;

    const roomlayout3 = new RoomLayout();
    roomlayout3.layout=layout3;
    roomlayout3.capacity=25;

    const roomlayout4 = new RoomLayout();
    roomlayout4.layout=layout1;
    roomlayout4.capacity=30;

    const roomlayout5 = new RoomLayout();
    roomlayout5.layout=layout2;
    roomlayout5.capacity=35;

    const roomlayout6 = new RoomLayout();
    roomlayout6.layout=layout3;
    roomlayout6.capacity=40;


    /* ROOMS */
    const room1 = new Room();
    room1.id = 1;
    room1.name = "Sala albastra";
    room1.location="1st floor";
    room1.layouts = new Array<RoomLayout>();
    room1.layouts.push(roomlayout1);
    room1.layouts.push(roomlayout2);
    room1.layouts.push(roomlayout3);

    const room2 = new Room();
    room2.id = 2;
    room2.name = "Sala rosie";
    room2.location="2nd floor";
    room2.layouts = new Array<RoomLayout>();
    room2.layouts.push(roomlayout4);
    room2.layouts.push(roomlayout5);
    room2.layouts.push(roomlayout6);

    this.rooms.push(room1);
    this.rooms.push(room2);

    /* BOOKINGS */
    const book1 = new Booking();
    book1.id = 1;
    book1.title = "Sedinta administrativa";
    book1.date = "22/09/2020";
    book1.startTime = "11:00";
    book1.endTime = "13:00";
    book1.user = user1;
    book1.room = room1;

    this.bookings.push(book1);
  }

  /* REST API --> USERS */
  getUsers(): Observable<Array<User>>{
    return of(this.users);
  }

  getUserById(id: number): Observable<User>{
    const user = this.users.find(el=> el.id === id);
    return of(user);
  }

  postUser(user: User): Observable<User>{
    let maxIndex = 0;
     this.users.forEach(
       (el)=>{
         if(el.id>maxIndex){
           maxIndex = el.id;
     }});
     user.id = maxIndex + 1;
    this.users.push(user);
    return of(user);
  }

  putUser(user: User): Observable<User>{
    const indexFound = this.users.findIndex(el=> el.id === user.id);

    this.users[indexFound].name = user.name;
    this.users[indexFound].username = user.username;
    this.users[indexFound].password = user.password;
    this.users[indexFound].role = user.role;
    return of(user);
  }

  /* REST API --> ROOMS */
  getRooms(): Observable<Array<Room>>{
    return of(this.rooms);
  }

  getRoomById(id: number): Observable<Room>{
    const user = this.rooms.find(el=>el.id === id);
    return of(user);
  }

  postRoom(room: Room): Observable<Room>{
    console.log("data.service -- postRoom() --> the room i get");
    console.log(room);
    let maxIndex = 0;
    this.rooms.forEach(
      (el)=>{
        if(el.id>maxIndex){
          maxIndex = el.id;
    }});
    room.id = maxIndex + 1;
   this.rooms.push(room);
   return of(room);
  }

  putRoom(room: Room): Observable<Room>{
    console.log("data.service -- putRoom() --> the room i get");
    console.log(room);
    let foundRoom = this.rooms.find(el => el.id===room.id);
    foundRoom.id = room.id;
    foundRoom.name = room.name;
    foundRoom.location = room.location;
    foundRoom.layouts = room.layouts;

    return of(foundRoom);
  }

  /* REST API --> LAYOUTS*/
  getLayouts(): Observable<Array<Layout>>{
    return of(this.layouts);
  }
}
