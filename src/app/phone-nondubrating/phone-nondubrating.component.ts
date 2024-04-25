import { Component } from '@angular/core';
import { PhoneServiceService } from '../Service/phone-service.service';
import { PhoneModel } from '../phone-model';
@Component({
  selector: 'app-phone-nondubrating',
  templateUrl: './phone-nondubrating.component.html',
  styleUrl: './phone-nondubrating.component.css'
})
export class PhoneNondubratingComponent {
  nondubphone:PhoneModel[];
  constructor(private service:PhoneServiceService){}

  nondub():void {
    this.service.nondub().subscribe(res=>this.nondubphone=res)
  }

}
