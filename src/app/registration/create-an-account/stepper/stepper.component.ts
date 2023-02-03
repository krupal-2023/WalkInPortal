import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent {
  
  @Input() currentStepNumber:number = 1;

  steps:{number:number,name:string}[] = [
    {number:1,name:'Personal Information'},
    {number:2,name:'Qualifications'},
    {number:3,name:'Review and Proceed'},
  ]
}
