import { Component, Input, AfterViewInit } from '@angular/core';
import { IEducationalQualification } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-educational-qualification',
  templateUrl: './educational-qualification.component.html',
  styleUrls: ['./educational-qualification.component.scss']
})
export class EducationalQualificationComponent implements AfterViewInit {

  @Input()
  educationalQualification:IEducationalQualification|undefined;

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

  textInputIds:string[] = [
    'percentage','otherCollege','collegeLocation',

  ];
  selectInputIds:string[] = [
    'yearOfPassing','qualification','stream','college',
  ]

  save(giveWarning:boolean) :IEducationalQualification|undefined {
   let educationalQualification:any = {};
   
    //look for all input text fields
    for(const textInputId of this.textInputIds) {
      let element:HTMLInputElement = document.getElementById(textInputId) as HTMLInputElement;
      
      if(element.value=='' && giveWarning ) {
        alert('All fields are required !');
        return undefined;
      }
      educationalQualification[textInputId] = element.value;
    }
    //if other college field is empty then put -
    if(educationalQualification['otherCollege'] == '') {
      educationalQualification['otherCollege'] = '-';
    }

    //look for all dropdown (select tag)
    for (const selectInputId of this.selectInputIds) {
      let element:HTMLSelectElement = document.getElementById(selectInputId) as HTMLSelectElement;
      educationalQualification[selectInputId] = element.value;
    }

    this.educationalQualification = educationalQualification;
    return educationalQualification;
  }
  
  //load saved data
  loadSavedData():void {
    if(this.educationalQualification != undefined) {
      //load input:text data
    for(const textInputId of this.textInputIds) {
      let element:HTMLInputElement = document.getElementById(textInputId) as HTMLInputElement;
      element.value = this.educationalQualification[textInputId as keyof IEducationalQualification] as string;
    }

    //look for all dropdown (select tag)
    for (const selectInputId of this.selectInputIds) {
      let element:HTMLSelectElement = document.getElementById(selectInputId) as HTMLSelectElement;
      element.selectedIndex = this.educationalQualification[selectInputId as keyof IEducationalQualification] as number;
    }
    }
  }

  ngAfterViewInit(): void {
      this.loadSavedData();
  }

  toggleEducationalQualification():void {
    this.isEducationalQualificationOpen = !this.isEducationalQualificationOpen;
  }
}
