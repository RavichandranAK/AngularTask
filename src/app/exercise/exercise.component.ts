import { Component } from '@angular/core';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrl: './exercise.component.css'
})
export class ExerciseComponent {

  sample="This is Interpolation";
  image:string="C:\AngularTask\task\src\assets\tt.jpg"

  
  res:string='';
  onKeyUp(event: KeyboardEvent): void {
    console.log('Key pressed:', event.key);
    this.res=event.key;
  }
  count:number=0;
  click() {
    this.count++;
  }

  mouseovered() {
    console.log("mouseover detected")
  }
}
