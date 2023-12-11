import { Component } from '@angular/core';
import {Ban} from "../../models/Ban/ban";
import {ActivatedRoute} from "@angular/router";
import {BanService} from "../../services/ban.service";
import {Report} from "../../models/report/report";
import {ReportService} from "../../services/report.service";

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent {
  report :Report =new Report();
  idu :number;




  constructor(private ac: ActivatedRoute,private bs:ReportService){
  }
  ngOnInit(){

  }
  addUniversity(){
    console.log("pressed on add")
    // this.us.addUniversite(this.university).subscribe();
    this.bs.addReportAndAssignUser(this.report,this.idu).subscribe();

  }

}
