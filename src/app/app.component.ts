import { Component, OnInit } from '@angular/core';
import { ServiceService } from './services/service.service';
import { City, Forecast } from './models/wether.models';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'whether_app';

  wetherData : any
  wetherData1 : any
  constructor(private service: ServiceService){

  }
  ngOnInit(): void {
   this.service.getWetherData('India').subscribe({
    next: (Response:any)=>{
      this.wetherData = Response.forecast
      this.wetherData1 = Response.city
      console.log('Response',this.wetherData);
      console.log('Response',this.wetherData1);
    }
   });
  }
 
}
