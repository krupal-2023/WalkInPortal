import { Component, } from '@angular/core';

@Component({
  selector: 'app-educational-qualification',
  templateUrl: './educational-qualification.component.html',
  styleUrls: ['./educational-qualification.component.scss']
})
export class EducationalQualificationComponent {

  isEducationalQualificationOpen:boolean = true;

  yearsOfPassing:number[] = [2020,2021,2022];

  qualifications:string[] = [
    "Bachelor in Technology (B.Tech)",
    "Masters in Technology (B.Tech)",
    "B.Sc It"
  ]

  streams:string[] = [
    'Information Technology',
    'Computer Engineering',
    'Electronics Engineering'
  ]

  colleges:string[] = [
    'Pune Institute of Technology (PIT)',
    'Birla Vishvakarma Mahavidyalaya',
    'SVNIT - Surat',
    'DA-IICT'
  ]

  toggleEducationalQualification():void {
    this.isEducationalQualificationOpen = !this.isEducationalQualificationOpen;
  }
}
