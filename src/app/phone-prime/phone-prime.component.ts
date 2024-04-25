import { Component } from '@angular/core';
import { PhoneModel } from '../phone-model';
import { PhoneServiceService } from '../Service/phone-service.service';
@Component({
  selector: 'app-phone-prime',
  templateUrl: './phone-prime.component.html',
  styleUrl: './phone-prime.component.css'
})
export class PhonePrimeComponent {
  primephones:PhoneModel[];
  constructor(private service:PhoneServiceService){}

  prime():void {
    this.service.primeph().subscribe(res=>{
      this.primephones=res;
    })
  }

}
