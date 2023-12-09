import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {UserRoutingModule} from "./user/user-routing.module";
import { AddroomComponent } from './room/addroom/addroom.component';
import { UpdateRoomComponent } from './room/update-room/update-room.component';
import { RoomsComponent } from './room/rooms/rooms.component';
import { AffichenotifComponent } from './notification/affichenotif/affichenotif.component';

import { ChatComponent } from './socket/chat/chat.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BanComponent } from './RepAndBan/ban/ban.component';
import { ReportComponent } from './RepAndBan/report/report.component';

@NgModule({
  declarations: [
    AppComponent,
    AddroomComponent,
    UpdateRoomComponent,
    RoomsComponent,
    AffichenotifComponent,
    ChatComponent,
    NavbarComponent,
    BanComponent,
    ReportComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserRoutingModule, //mesh lezem routing module mta zbi
    HttpClientModule,
    FormsModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
