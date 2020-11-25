import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Booking } from './model/Booking';
import { Layout } from './model/Layout';
import { Room } from './model/Room';
import { RoomLayout } from './model/RoomLayout';
import { User } from './model/User';
import {environment} from '../environments/environment';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  users = new Array<User>();
  rooms =  new Array<Room>();
  bookings = new Array<Booking>();
  layouts =  new Array<Layout>();

  constructor(private http: HttpClient) {
  }

  /* REST API --> USERS */
  getUsers(): Observable<Array<User>>{
    //let headers = new HttpHeaders
    return this.http.get<Array<User>>(environment.restUrl + "/api/users")
        .pipe(map(data=>{
          const users = new Array<User>();
          for(const user of data){
            users.push(User.fromHttp(user));
          }
          return users;
        }
        ));
  }


  getUserById(id: number): Observable<User>{
    return this.http.get<User>(environment.restUrl + "/api/users/" + id)
      .pipe(map(data=>{
        const user = User.fromHttp(data);
        return user;
      }));
  }

  postUser(user: User): Observable<User>{
    return this.http.post<User>(environment.restUrl + "/api/users", user);
  }

  putUser(user: User): Observable<User>{
    return this.http.put<User>(environment.restUrl + "/api/users", user);
  }

  /* REST API --> ROOMS */

  getRooms(): Observable<Array<Room>>{
    return this.http.get<Array<Room>>(environment.restUrl + "/api/rooms")
      .pipe(map(data=>{
        const rooms = new Array<Room>();
        for(const room of data){
          rooms.push(Room.fromHttp(room));
        }
        return rooms;
      }))
    ;
  }

  getRoomById(id: number): Observable<Room>{
    return this.http.get<Room>(environment.restUrl + "/api/rooms/" + id)
      .pipe(map(data=>{
        return Room.fromHttp(data);
      }));
  }

  postRoom(room: Room): Observable<Room>{
    return this.http.post<Room>(environment.restUrl + "/api/rooms", room);
  }

  putRoom(room: Room): Observable<Room>{
    return this.http.put<Room>(environment.restUrl + "/api/rooms", room);
  }

  /* REST API --> LAYOUTS*/
  getLayouts(): Observable<Array<Layout>>{
    return this.http.get<Array<Layout>>(environment.restUrl + "/api/rooms/layouts");
  }


}
