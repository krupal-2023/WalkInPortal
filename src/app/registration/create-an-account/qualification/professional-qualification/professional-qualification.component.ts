import { Component } from '@angular/core';

@Component({
  selector: 'app-professional-qualification',
  templateUrl: './professional-qualification.component.html',
  styleUrls: ['./professional-qualification.component.scss']
})
export class ProfessionalQualificationComponent {

  isProfessionalQualificationOpen:boolean  = true;
  toggleProfessionalQualification():void {
    this.isProfessionalQualificationOpen = !this.isProfessionalQualificationOpen;
  }

  technologies:string[] = [
    'Javascript',
    'Angular JS',
    'React',
    'Node JS',
    'Others'
  ]
}
