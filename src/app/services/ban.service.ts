import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Ban} from "../models/Ban/ban";
import {Observable} from "rxjs";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'http://localhost:4200',
  }),
};
@Injectable({
  providedIn: 'root'
})
export class BanService {


  constructor(private _http:HttpClient) { }

  addBan(ban:Ban):Observable<Ban>{
    return this._http.post<Ban>('http://localhost:8081/reportandban/addBan',Ban,httpOptions);
  }

  getAllBan():Observable<Ban[]>{
    return this._http.get<Ban[]>('http://localhost:8081/reportandban/Bans',httpOptions);
  }

  getBan(id:number):Observable<Ban>{
    return this._http.get<Ban>("http://localhost:8081/reportandban/getBanbyid/"+id,httpOptions);
  }

  updateBan(Ban:Ban):Observable<Ban>{
    return this._http.put<Ban>("http://localhost:8081/reportandban/updateBan",Ban,httpOptions);
  }
  deleteBan(idu:number):Observable<Ban>{
    return this._http.delete<Ban>("http://localhost:8081/reportandban/deleteBan/"+idu,httpOptions);
  }
  addBanandAssaginItToUser(ban:Ban,iduser:number):Observable<Ban>{
    return this._http.post<Ban>('http://localhost:8081/reportandban/addBanAndAssignUser/'+iduser,Ban,httpOptions);
  }
}
