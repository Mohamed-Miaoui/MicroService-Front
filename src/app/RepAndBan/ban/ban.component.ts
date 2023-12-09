import { Component } from '@angular/core';
import {Ban} from "../../models/Ban/ban";
import {ActivatedRoute} from "@angular/router";
import {BanService} from "../../services/ban.service";

@Component({
  selector: 'app-ban',
  templateUrl: './ban.component.html',
  styleUrls: ['./ban.component.css']
})
export class BanComponent {
  ban :Ban =new Ban();
  idu :number;




  constructor(private ac: ActivatedRoute,private bs:BanService){
  }
  ngOnInit(){

  }
  addUniversity(){
    console.log("pressed on add")
    // this.us.addUniversite(this.university).subscribe();
    this.bs.addBanandAssaginItToUser(this.ban,this.idu).subscribe();

  }

}
