import { Component, OnInit } from '@angular/core';
import { PhoneServiceService } from '../Service/phone-service.service';
import { PhoneModel } from '../phone-model';

@Component({
  selector: 'app-phone-black',
  templateUrl: './phone-black.component.html',
  styleUrl: './phone-black.component.css'
})
export class PhoneBlackComponent  {
  phonelist:PhoneModel[];
  blackphone:PhoneModel[];
  
 
  
 
  constructor(private service:PhoneServiceService){};

  black():void {
    
    this.service.black().subscribe(res=>{console.log(res);
      this.blackphone=res;
    })
  }

  
  

  
 

  update10():void {
    this.service.getting().subscribe(res=>{
      this.service.update(res);
  });
   
  }

}
