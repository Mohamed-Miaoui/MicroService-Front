import {Component, OnInit} from '@angular/core';
import {RoomservService} from "../../services/roomserv.service";
import {Room} from "../../models/room/room";

@Component({
  selector: 'app-addroom',
  templateUrl: './addroom.component.html',
  styleUrls: ['./addroom.component.css']
})
export class AddroomComponent  implements OnInit{
  room:Room
constructor(private roomService:RoomservService) {
}
ngOnInit() {
}
addroom(){
  this.roomService.addRoom(this.room).subscribe();
}


}
