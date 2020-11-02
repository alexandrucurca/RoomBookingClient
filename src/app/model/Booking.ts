import { Time } from '@angular/common';
//import { RoomDesignComponent } from '../admin/rooms/room-design/room-design.component';
import { Layout } from './Layout';
import { Room } from './Room';
import { User } from './User';



export class Booking{
  id: number;
  date: string;
  startTime: string;
  endTime: string;
  layout: Layout;
  user: User;
  room: Room;
  title: string;

  constructor(){}
}
