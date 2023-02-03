import { Component } from '@angular/core';

@Component({
  selector: 'app-create-an-account',
  templateUrl: './create-an-account.component.html',
  styleUrls: ['./create-an-account.component.scss']
})
export class CreateAnAccountComponent {
  currentStepNumber:number = 1;

  updateCurrentStepNumber(stepNumber:any):void {
    this.currentStepNumber = stepNumber;
  }
}
