import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { IPersonalInformation, IEducationalQualification, IProfessionalQualification } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-create-an-account',
  templateUrl: './create-an-account.component.html',
  styleUrls: ['./create-an-account.component.scss']
})
export class CreateAnAccountComponent {
  currentStepNumber:number = 1;
  personalInformation:IPersonalInformation|undefined;
  educationalQualification: IEducationalQualification|undefined;
  professionalQualification: IProfessionalQualification|undefined = {
    "yearsOfExperience": "9",
    "currentCTC": "12",
    "expectedCTC": "9",
    "applicantType": "Experienced",
    "expertiseTechnologyIds": [
        0,
        2,
        3
    ],
    "expertiseOtherTechnology": "-",
    "familiarTechnologyIds": [
        0,
        1,
        3
    ],
    "familiarOtherTechnology": "-",
    "onNoticePeriod": false,
    "howLongNoticePeriodId":0,
    "haveYouAppeared": false,
    "ifYesWhichRole": "-"
};

  constructor(private location:Location) {}

  updateCurrentStepNumber(stepNumber:any):void {
    this.currentStepNumber = stepNumber;
  }

  savePersonalInformation(data:IPersonalInformation):void {
    this.personalInformation = data;
  }

  saveEducationalQualification(data:IEducationalQualification):void {
    this.educationalQualification = data;
  }

  saveProfessionalQualification(data:IProfessionalQualification):void {
    this.professionalQualification = data;
  }

  onCancel(event:Event):void {
    event.preventDefault();
    this.location.back();
  }
}
