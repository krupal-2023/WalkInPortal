import { Component } from '@angular/core';
import { IPersonalInformation } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-create-an-account',
  templateUrl: './create-an-account.component.html',
  styleUrls: ['./create-an-account.component.scss']
})
export class CreateAnAccountComponent {
  currentStepNumber:number = 1;
  personalInformation:IPersonalInformation|undefined;

  updateCurrentStepNumber(stepNumber:any):void {
    this.currentStepNumber = stepNumber;
  }

  savePersonalInformation(data:IPersonalInformation):void {
    this.personalInformation = data;
  }

}
