import { Component, OnInit } from '@angular/core';
import { PhoneServiceService } from '../Service/phone-service.service';
import { PhoneModel } from '../phone-model';

@Component({
  selector: 'app-phone-get',
  templateUrl: './phone-get.component.html',
  styleUrl: './phone-get.component.css'
})
export class PhoneGetComponent implements OnInit {
  phonemodel:PhoneModel[];
  blackphone:PhoneModel[];
  // switchTable:boolean=true;
  constructor(private service:PhoneServiceService){}

ngOnInit(): void {
   
  this.service.getting().subscribe(res=>{console.log(res);
    this.phonemodel=res});
 
}


blacks():void {
  this.blackphone= this.phonemodel.filter(x=>x.color==='black');
  // this.switchTable=false;
}
}
