import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { CalendarComponent } from './calendar/calendar.component';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { Route } from '@angular/compiler/src/core';
import { EditBookingComponent } from './calendar/edit-booking/edit-booking.component';
import { RoomsComponent } from './admin/rooms/rooms.component';
import { RoomEditComponent } from './admin/rooms/room-edit/room-edit.component';
import { UserEditComponent } from './admin/users/user-edit/user-edit.component';
import { UsersComponent } from './admin/users/users.component';
import { RoomDesignComponent } from './admin/rooms/room-design/room-design.component';
import { UserDesignComponent } from './admin/users/user-design/user-design.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyModalComponent } from './admin/rooms/my-modal/my-modal.component';

const routes : Routes = [
  {path: '', component: CalendarComponent},
  {path: 'calendar', component: CalendarComponent},
  {path: 'edit-booking', component: EditBookingComponent},
  {path: 'admin/rooms', component: RoomsComponent},
  {path: 'admin/rooms/room-edit', component: RoomEditComponent},
  {path: 'admin/users', component: UsersComponent},
  {path: 'admin/users/user-edit', component: UserEditComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CalendarComponent,
    EditBookingComponent,
    RoomsComponent,
    UsersComponent,
    RoomEditComponent,
    UserEditComponent,
    RoomDesignComponent,
    UserDesignComponent,
    MyModalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
