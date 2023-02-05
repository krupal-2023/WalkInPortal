import { Component, Input, AfterViewInit } from '@angular/core';
import { IProfessionalQualification } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-professional-qualification',
  templateUrl: './professional-qualification.component.html',
  styleUrls: ['./professional-qualification.component.scss'],
})
export class ProfessionalQualificationComponent implements AfterViewInit {
  @Input()
  professionalQualification: IProfessionalQualification | undefined;

  isProfessionalQualificationOpen: boolean = true;
  toggleProfessionalQualification(): void {
    this.isProfessionalQualificationOpen =
      !this.isProfessionalQualificationOpen;
  }

  applicantTypes: string[] = ['Fresher', 'Experienced'];

  technologies: string[] = [
    'Javascript',
    'Angular JS',
    'React',
    'Node JS',
    'Others',
  ];

  save(): IProfessionalQualification {
    let professionalQualification: any = {};

    // look for selected applicant type
    for (let index in this.applicantTypes) {
      let applicantTypeElement: HTMLInputElement = document.getElementById(
        `applicantType${index}`
      ) as HTMLInputElement;
      if (applicantTypeElement.checked) {
        professionalQualification['applicantTypeId'] = index;
        break;
      }
    }

    // look for all selected technologies
    let technologyIds: number[] = [];
    for (let index in this.technologies) {
      let checkbox: HTMLInputElement = document.getElementById(
        `technology${index}`
      ) as HTMLInputElement;
      if (checkbox.checked) {
        technologyIds.push(Number(index));
      }
    }
    professionalQualification['technologyIds'] = technologyIds;

    //other technology
    let otherTechnology: string = (
      document.getElementById('otherTechnology') as HTMLInputElement
    ).value;
    professionalQualification['otherTechnology'] =
      otherTechnology == '' ? '-' : otherTechnology;

    //have you appeared in zeus (radio)
    let yesRadio: HTMLInputElement = document.getElementById(
      'appeared'
    ) as HTMLInputElement;
    if (yesRadio.checked) {
      professionalQualification['haveYouAppeared'] = true;
    } else {
      professionalQualification['haveYouAppeared'] = false;
    }

    //other technology
    let whichRole: string = (
      document.getElementById('whichRole') as HTMLInputElement
    ).value;
    professionalQualification['ifYesWhichRole'] =
      whichRole == '' ? '-' : whichRole;

    this.professionalQualification = professionalQualification as IProfessionalQualification;
    console.log('on save ',this.professionalQualification);
    return this.professionalQualification!;
  }

  loadSavedData(): void {
    console.log('load saved ',this.professionalQualification);
    if(this.professionalQualification != undefined) {
    // set applicant type
    let applicantTypeId:number = this.professionalQualification['applicantTypeId' as keyof IProfessionalQualification] as number;
    console.log('hello',applicantTypeId);
    (
      document.getElementById(
        `applicantType${applicantTypeId}`
      ) as HTMLInputElement
    ).checked = true;

    // set technologies
    let technologyIds = this.professionalQualification[
      'technologyIds' as keyof IProfessionalQualification
    ] as number[];
    for ( let technologyId of technologyIds ) {
      (document.getElementById(`technology${technologyId}`) as HTMLInputElement).checked = true;
    }
    
    //set other technology
    let ifOthers:boolean = (document.getElementById(`technology${this.technologies.indexOf('Others')}`) as HTMLInputElement).checked;
    let otherTechnology:string = this.professionalQualification['otherTechnology' as keyof IProfessionalQualification] as string;
    (document.getElementById('otherTechnology') as HTMLInputElement ).value=  ifOthers ? otherTechnology : '-';
  
    //set have you appeared in zeus
    let haveYouAppeared:boolean = this.professionalQualification['haveYouAppeared'] as boolean;
    (document.getElementById(`${haveYouAppeared?'appeared':'not-appeared'}`) as HTMLInputElement).checked = true;
  
    //if yes which role
    let whichRole:string = haveYouAppeared ? this.professionalQualification['ifYesWhichRole' as keyof IProfessionalQualification] as string : '-';
    (document.getElementById('whichRole') as HTMLInputElement).value = whichRole;
  }
}

  ngAfterViewInit(): void {
    this.loadSavedData();
  }
}
