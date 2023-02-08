import { Component,EventEmitter,Input, Output } from '@angular/core';
import { IEducationalQualification, IPersonalInformation, IProfessionalQualification } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-review-and-proceed',
  templateUrl: './review-and-proceed.component.html',
  styleUrls: ['./review-and-proceed.component.scss']
})
export class ReviewAndProceedComponent {

  @Input() 
  personalInformation:IPersonalInformation|undefined;

  @Input() 
  educationalQualification!:IEducationalQualification|undefined;

  @Input()
  professionalQualification!:IProfessionalQualification|undefined;

  @Output() 
  updateCurrentStepNumber:EventEmitter<any> = new EventEmitter<any>();
  
  onClickPrevious():void {
    //jump to previous page
    this.updateCurrentStepNumber.emit(2);
  }
}