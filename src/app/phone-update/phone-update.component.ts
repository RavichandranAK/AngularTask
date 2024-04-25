import { Component, OnInit } from '@angular/core';
import { PhoneServiceService } from '../Service/phone-service.service';
import { PhoneModel } from '../phone-model';

@Component({
  selector: 'app-phone-update',
  templateUrl: './phone-update.component.html',
  styleUrl: './phone-update.component.css'
})
export class PhoneUpdateComponent implements OnInit {

  updatephone:PhoneModel[];
  middlelist:String[];

  constructor(private service:PhoneServiceService){}

  ngOnInit(): void {
    this.service.getting().subscribe(res=>{
      this.updatephone=res;
    })
  }

  update():void {
  
    this.service.update(this.updatephone);
  }

  delete():void {
    this.service.delete(this.updatephone);
  }

  deletecolor():void {
    console.log(this.updatephone)
    this.service.deletecolor(this.updatephone);
  }

  getmiddle() {
    this.service.getmiddle().subscribe(res=>this.middlelist=res);
  }

}
