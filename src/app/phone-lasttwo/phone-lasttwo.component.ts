import { Component } from '@angular/core';
import { PhoneServiceService } from '../Service/phone-service.service';
import { PhoneModel } from '../phone-model';
@Component({
  selector: 'app-phone-lasttwo',
  templateUrl: './phone-lasttwo.component.html',
  styleUrl: './phone-lasttwo.component.css'
})
export class PhoneLasttwoComponent {
  lasttwoph:PhoneModel[];
constructor(private service:PhoneServiceService){}
blackphone:PhoneModel[];

lasttwo():void {
  this.service.lasttwo().subscribe(res=>{
    this.lasttwoph=res;
  })
}
}
