import { Component, EventEmitter, Output, ViewChild, Input } from '@angular/core';
import { IEducationalQualification, IProfessionalQualification } from 'src/app/shared/interfaces';
import { EducationalQualificationComponent } from './educational-qualification/educational-qualification.component';
import { ProfessionalQualificationComponent } from './professional-qualification/professional-qualification.component';

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

  @Output()
  saveProfessionalQualification:EventEmitter<IProfessionalQualification> = new EventEmitter<IProfessionalQualification>();

  @Input()
  professionalQualification:IProfessionalQualification|undefined;

  @ViewChild(ProfessionalQualificationComponent)
  professionalComponent!:ProfessionalQualificationComponent;

  onClickPrevious():void {

    //save filled data 
    this.educationalQualification = this.educationalComponent.save(false);
    if(this.educationalQualification==null) return;
    
    this.professionalQualification = this.professionalComponent.save();
    if(this.professionalComponent==null) return;

    console.log('onclick previous',this.professionalQualification)

    //send data to parent
    this.saveEducationalQualification.emit(this.educationalQualification);
    this.saveProfessionalQualification.emit(this.professionalQualification);

    //jump to previous page
    this.updateCurrentStepNumber.emit(1);
  }

  onClickNext():void {
    
    //save filled data 
    this.educationalQualification = this.educationalComponent.save(true);
    if(this.educationalQualification==null) return;

    this.professionalQualification = this.professionalComponent.save();
    if(this.professionalComponent==null) return;

    //send data to parent
    this.saveEducationalQualification.emit(this.educationalQualification);
    this.saveProfessionalQualification.emit(this.professionalQualification);
  
    //jump to next page
    this.updateCurrentStepNumber.emit(3);
  }
}
