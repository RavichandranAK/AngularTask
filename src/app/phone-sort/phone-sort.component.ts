import { Component } from '@angular/core';
import { PhoneModel } from '../phone-model';
import { PhoneServiceService } from '../Service/phone-service.service';
@Component({
  selector: 'app-phone-sort',
  templateUrl: './phone-sort.component.html',
  styleUrl: './phone-sort.component.css'
})
export class PhoneSortComponent {
  sortphone:PhoneModel[];
  constructor(private service:PhoneServiceService){}

  sortdesc():void {
    this.service.sort().subscribe(res=>{
      this.sortphone=res;
    })
  }


}
