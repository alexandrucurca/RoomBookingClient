//import RoomLayout from './RoomLayout';

import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { RoomLayout } from './RoomLayout';
import {Layout} from './Layout';

export class Room{
  id: number;
  name: string;
  location: string;
  layouts: Array<RoomLayout>;

  constructor(){
  }

  static fromHttp(httpRoom: Room) : Room{
    const room = new Room();
    room.id = httpRoom.id;
    room.name = httpRoom.name;
    room.location = httpRoom.location;
    room.layouts = httpRoom.layouts;
    return room;
  }

  populateWithLayouts(layouts: Array<Layout>){
    this.layouts = new Array<RoomLayout>();
    for(const layout of layouts){
        const roomLayout = new RoomLayout();
        roomLayout.layout = layout;
        roomLayout.capacity = 0;
        this.layouts.push(roomLayout);
     }
  }
}
