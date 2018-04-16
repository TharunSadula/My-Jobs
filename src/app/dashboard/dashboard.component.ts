import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  private  tarun:any[];
  constructor() { }

  ngOnInit() {
   this.tarun=[{id:1,jobDescription:"Neudesic",date:Date.now,appliedIn:"Linkedin"},
   {id:2,jobDescription:"deloitee",date:Date.now,appliedIn:"glassdoor"},
  {id:1,jobDescription:"Djj",date:Date.now,appliedIn:"Indeed"}]
  }

}
