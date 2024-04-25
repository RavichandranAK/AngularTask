import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhonePostComponent } from './phone-post/phone-post.component';
import { PhoneBlackComponent } from './phone-black/phone-black.component';
import { PhoneNondubratingComponent } from './phone-nondubrating/phone-nondubrating.component';
import { PhoneSortComponent } from './phone-sort/phone-sort.component';
import { PhonePrimeComponent } from './phone-prime/phone-prime.component';
import { PhoneLasttwoComponent } from './phone-lasttwo/phone-lasttwo.component';
import { PhoneGetComponent } from './phone-get/phone-get.component';
import { PhoneUpdateComponent } from './phone-update/phone-update.component';

const routes: Routes = [
  {path:'new', component:PhonePostComponent},
  {path:"show",component:PhoneGetComponent},
  {path:"black",component:PhoneBlackComponent},
  {path:"lasttwo",component:PhoneLasttwoComponent},
  {path:"prime",component:PhonePrimeComponent},
  {path:"sort", component:PhoneSortComponent},
  {path:"nondub",component:PhoneNondubratingComponent},
  {path:"update",component:PhoneUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
