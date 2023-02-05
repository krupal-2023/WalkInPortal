import { Component, EventEmitter, Output, ViewChild, Input } from '@angular/core';
import { IEducationalQualification } from 'src/app/shared/interfaces';
import { EducationalQualificationComponent } from './educational-qualification/educational-qualification.component';

@Component({
  selector: 'app-qualification',
  templateUrl: './qualification.component.html',
  styleUrls: ['./qualification.component.scss']
})
export class QualificationComponent {

  @Output() 
  updateCurrentStepNumber:EventEmitter<any> = new EventEmitter<any>();

  @Output()
  saveEducationalQualification:EventEmitter<IEducationalQualification> = new EventEmitter<IEducationalQualification>();

  @ViewChild(EducationalQualificationComponent)
  educationalComponent!:EducationalQualificationComponent;
  
  @Input()
  educationalQualification:IEducationalQualification|undefined;

  onClickPrevious():void {

    //save filled data 
    this.educationalQualification = this.educationalComponent.save(false);
    if(this.educationalQualification==null) return;

    //send data to parent
    this.saveEducationalQualification.emit(this.educationalQualification);
    
    //jump to previous page
    this.updateCurrentStepNumber.emit(1);
  }

  onClickNext():void {
    
    //save filled data 
    this.educationalComponent.save(true);

    //send data to parent
    this.saveEducationalQualification.emit(this.educationalQualification);
  
    //jump to next page
    this.updateCurrentStepNumber.emit(3);
  }
}
