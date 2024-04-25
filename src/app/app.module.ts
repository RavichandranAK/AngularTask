import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PhonePostComponent } from './phone-post/phone-post.component';
import { PhoneServiceService } from './Service/phone-service.service';
import { PhoneGetComponent } from './phone-get/phone-get.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PhoneBlackComponent } from './phone-black/phone-black.component';
import { PhoneUpdateComponent } from './phone-update/phone-update.component';
import { PhoneLasttwoComponent } from './phone-lasttwo/phone-lasttwo.component';
import { PhonePrimeComponent } from './phone-prime/phone-prime.component';
import { PhoneSortComponent } from './phone-sort/phone-sort.component';
import { PhoneNondubratingComponent } from './phone-nondubrating/phone-nondubrating.component';
import { RouterModule } from '@angular/router';
import { ExerciseComponent } from './exercise/exercise.component';


@NgModule({
  declarations: [
    AppComponent,
    PhonePostComponent,
    PhoneGetComponent,
    PhoneBlackComponent,
    PhoneUpdateComponent,
    PhoneLasttwoComponent,
    PhonePrimeComponent,
    PhoneSortComponent,
    PhoneNondubratingComponent,
    ExerciseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [PhoneServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
