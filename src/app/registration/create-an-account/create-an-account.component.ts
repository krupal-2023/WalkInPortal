import { Component } from '@angular/core';
import { IPersonalInformation, IEducationalQualification, IProfessionalQualification } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-create-an-account',
  templateUrl: './create-an-account.component.html',
  styleUrls: ['./create-an-account.component.scss']
})
export class CreateAnAccountComponent {
  currentStepNumber:number = 2;
  personalInformation:IPersonalInformation|undefined;
  educationalQualification: IEducationalQualification|undefined;
  professionalQualification: IProfessionalQualification|undefined;

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
    console.log('mainkrupal ',this.professionalQualification);
  }
}
