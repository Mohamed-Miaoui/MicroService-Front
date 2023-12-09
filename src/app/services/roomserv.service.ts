import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Room} from "../models/room/room";

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:4200',
    }),
};
@Injectable({
  providedIn: 'root'
})

export class RoomservService {
  roomURL : string = "http://localhost:8081/room/";
  constructor(private _http:HttpClient) { }
  getAllRoom():Observable<Room[]>{
    return this._http.get<Room[]>(this.roomURL+'getAll',httpOptions);
  }
  getOne(id:number):Observable<Room> {
    return this._http.get<Room>(this.roomURL+'getone/'+id,httpOptions);
  }

  //momkin 8alit
  decreaseNBR(id:number,room:Room):Observable<Room> {
  return this._http.put<Room>(this.roomURL+'update-nbr/'+id,room,httpOptions);
}
deleatRoom(id:number):Observable<Room>{
    return this._http.delete<Room>(this.roomURL+'deleateRoom/'+id,httpOptions)
}
updateNBR(id:number,num:number):Observable<Room>{
    return this._http.put<Room>(this.roomURL+'updateRoomNbr/'+id,num,httpOptions)
}
updateName(id:number,name:string):Observable<Room>{
    return this._http.put<Room>(this.roomURL+'updateRoomName'+id,name,httpOptions)
}
updateRoom(room:Room):Observable<Room>{
    return this._http.put<Room>(this.roomURL+'updateRoom',room,httpOptions)
}
addRoom(room:Room):Observable<Room>{
    return this._http.post<Room>(this.roomURL+'addRoom',room,httpOptions)
}


}
