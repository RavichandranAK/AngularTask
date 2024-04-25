import { Component, OnInit } from '@angular/core';
import { PhoneModel } from '../phone-model';
import { PhoneServiceService } from '../Service/phone-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-phone-post',
  templateUrl: './phone-post.component.html',
  styleUrl: './phone-post.component.css'
})
export class PhonePostComponent {

 

  Phone:PhoneModel=new PhoneModel();
  constructor(private phoneservice:PhoneServiceService){}
   
  
  



  submit():void {
    console.log(this.Phone);
    this.phoneservice.posting(this.Phone).subscribe(res=>{console.log(res)});
    
  }

}
