import { Component, Input, AfterViewInit, OnInit } from '@angular/core';
import { single } from 'rxjs';
import { IProfessionalQualification } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-professional-qualification',
  templateUrl: './professional-qualification.component.html',
  styleUrls: ['./professional-qualification.component.scss'],
})
export class ProfessionalQualificationComponent
  implements AfterViewInit, OnInit
{
  @Input()
  professionalQualification: IProfessionalQualification | undefined;

  @Input()
  readOnly: boolean = false;

  isFresherDev: boolean = true;

  isProfessionalQualificationOpen: boolean = true;
  toggleProfessionalQualification(): void {
    this.isProfessionalQualificationOpen =
      !this.isProfessionalQualificationOpen;
  }

  applicantTypes: string[] = ['Fresher', 'Experienced'];

  singleTextInputs: string[] = [
    'yearsOfExperience',
    'currentCTC',
    'expectedCTC',
  ];

  technologies: string[] = [
    'Javascript',
    'Angular JS',
    'React',
    'Node JS',
    'Others',
  ];

  noticePeriods: string[] = [
    '2 months',
    '3 months',
    '4 months',
    '5 months',
    '6 months',
  ];

  onChangeApplicantType(): void {
    let applicantTypeElement: HTMLInputElement = document.getElementById(
      'applicantTypeFresher'
    ) as HTMLInputElement;
    this.isFresherDev = applicantTypeElement.checked;
  }

  save(giveWarning: boolean): IProfessionalQualification | undefined {
    let professionalQualification: any = {};
    let applicantType: string = this.applicantTypes[0];

    //look for single text input fields
    for (let singleTextInput of this.singleTextInputs) {
      let element: HTMLInputElement = document.getElementById(
        singleTextInput
      ) as HTMLInputElement;
      if (element.value == '' && giveWarning && !this.isFresherDev) {
        alert('All fields are required !');
        element.focus();
        return undefined;
      }
      professionalQualification[singleTextInput] = element.value;
    }

    // look for selected applicant type
    for (let applicantType of this.applicantTypes) {
      let applicantTypeElement: HTMLInputElement = document.getElementById(`applicantType${applicantType}`) as HTMLInputElement;
      if (applicantTypeElement.checked) {
        professionalQualification['applicantType'] = applicantType;
        break;
      }
    }

    // look for all selected expertise-technologies
    let expertiseTechnologyIds: number[] = [];
    for (let index in this.technologies) {
      let checkbox: HTMLInputElement = document.getElementById(
        `expertise-technology${index}`
      ) as HTMLInputElement;
      if (checkbox.checked) {
        expertiseTechnologyIds.push(Number(index));
      }
    }
    professionalQualification['expertiseTechnologyIds'] =
      expertiseTechnologyIds;

    //other technology
    let expertiseOtherTechnology: string = (
      document.getElementById('expertiseOtherTechnology') as HTMLInputElement
    ).value;
    professionalQualification['expertiseOtherTechnology'] =
      expertiseOtherTechnology == '' ? '-' : expertiseOtherTechnology;

    // look for all selected familiar-technologies
    let familiarTechnologyIds: number[] = [];
    for (let index in this.technologies) {
      let checkbox: HTMLInputElement = document.getElementById(
        `familiar-technology${index}`
      ) as HTMLInputElement;
      if (checkbox.checked) {
        familiarTechnologyIds.push(Number(index));
      }
    }
    professionalQualification['familiarTechnologyIds'] = familiarTechnologyIds;

    //other technology
    let familiarOtherTechnology: string = (
      document.getElementById('familiarOtherTechnology') as HTMLInputElement
    ).value;
    professionalQualification['familiarOtherTechnology'] =
      familiarOtherTechnology == '' ? '-' : familiarOtherTechnology;

    //are you on notice period (radio)
    let onNoticePeriod: boolean = (
      document.getElementById('onNoticePeriod') as HTMLInputElement
    ).checked;
    professionalQualification['onNoticePeriod'] = onNoticePeriod;
    // details about notice period
    if (onNoticePeriod) {
      professionalQualification['whenNoticePeriodEnds'] = (
        document.getElementById('whenNoticePeriodEnds') as HTMLInputElement
      ).value;
      professionalQualification['howLongNoticePeriodId'] = (
        document.getElementById('howLongNoticePeriod') as HTMLSelectElement
      ).selectedIndex;
    }

    //have you appeared in zeus (radio)
    let yesRadio: HTMLInputElement = document.getElementById(
      'appeared'
    ) as HTMLInputElement;
    if (yesRadio.checked) {
      professionalQualification['haveYouAppeared'] = true;
    } else {
      professionalQualification['haveYouAppeared'] = false;
    }

    //which role
    let whichRole: string = (
      document.getElementById('whichRole') as HTMLInputElement
    ).value;
    professionalQualification['ifYesWhichRole'] =
      whichRole == '' ? '-' : whichRole;

    this.professionalQualification =
      professionalQualification as IProfessionalQualification;
    return this.professionalQualification!;
  }

  loadSavedData(): void {
    if (this.professionalQualification != undefined) {
      // set applicant type
      let applicantType: string = this.professionalQualification[
        'applicantType' as keyof IProfessionalQualification
      ] as string;

      (
        document.getElementById(
          `applicantType${applicantType}`
        ) as HTMLInputElement
      ).checked = true;

      if (!this.isFresherDev) {
        //set single text input fields
        for (let singleTextInput of this.singleTextInputs) {
          let element: HTMLInputElement = document.getElementById(
            singleTextInput
          ) as HTMLInputElement;
          element.value = this.professionalQualification[
            singleTextInput as keyof IProfessionalQualification
          ] as string;
        }
      }

      // set familiar technologies
      let familiarTechnologyIds = this.professionalQualification[
        'familiarTechnologyIds' as keyof IProfessionalQualification
      ] as number[];
      for (let technologyId of familiarTechnologyIds) {
        (
          document.getElementById(
            `familiar-technology${technologyId}`
          ) as HTMLInputElement
        ).checked = true;
      }

      //set familiar other technology
      let ifOthers: boolean = (
        document.getElementById(
          `familiar-technology${this.technologies.indexOf('Others')}`
        ) as HTMLInputElement
      ).checked;
      let otherTechnology: string = this.professionalQualification[
        'familiarOtherTechnology' as keyof IProfessionalQualification
      ] as string;
      (
        document.getElementById('familiarOtherTechnology') as HTMLInputElement
      ).value = ifOthers ? otherTechnology : '-';

      if (!this.isFresherDev) {
        // set expertise technologies
        let expertiseTechnologyIds = this.professionalQualification[
          'expertiseTechnologyIds' as keyof IProfessionalQualification
        ] as number[];
        for (let technologyId of expertiseTechnologyIds) {
          (
            document.getElementById(
              `expertise-technology${technologyId}`
            ) as HTMLInputElement
          ).checked = true;
        }

        //set expertise other technology
        let ifOthers: boolean = (
          document.getElementById(
            `expertise-technology${this.technologies.indexOf('Others')}`
          ) as HTMLInputElement
        ).checked;
        let otherTechnology: string = this.professionalQualification[
          'expertiseOtherTechnology' as keyof IProfessionalQualification
        ] as string;
        (
          document.getElementById(
            'expertiseOtherTechnology'
          ) as HTMLInputElement
        ).value = ifOthers ? otherTechnology : '-';
      }

      //on notice period (radio)
      if (!this.isFresherDev) {
        if (this.professionalQualification['onNoticePeriod']) {
          (
            document.getElementById('onNoticePeriod') as HTMLInputElement
          ).checked = true;
          //details about notice period
          (
            document.getElementById('whenNoticePeriodEnds') as HTMLInputElement
          ).value = this.professionalQualification['whenNoticePeriodEnds'] as string;
          (
            document.getElementById('howLongNoticePeriod') as HTMLSelectElement
          ).selectedIndex =
            this.professionalQualification['howLongNoticePeriodId'];
        } else {
          (
            document.getElementById('notOnNoticePeriod') as HTMLInputElement
          ).checked = true;
        }
      }

      //set have you appeared in zeus
      let haveYouAppeared: boolean = this.professionalQualification[
        'haveYouAppeared'
      ] as boolean;
      (
        document.getElementById(
          `${haveYouAppeared ? 'appeared' : 'not-appeared'}`
        ) as HTMLInputElement
      ).checked = true;

      //if yes which role
      let whichRole: string = haveYouAppeared
        ? (this.professionalQualification[
            'ifYesWhichRole' as keyof IProfessionalQualification
          ] as string)
        : '-';
      (document.getElementById('whichRole') as HTMLInputElement).value =
        whichRole;
    }
  }

  ngAfterViewInit(): void {
    this.loadSavedData();
  }

  ngOnInit(): void {
    if (this.readOnly) {
      let element: HTMLInputElement = document.getElementsByClassName(
        'main-professional-qualification'
      )[0] as HTMLInputElement;
      element.classList.add('readOnly');
    }
    if(this.professionalQualification != undefined) {
      if(this.professionalQualification['applicantType']=='Experienced') {
        this.isFresherDev = false;
      }
    }
  }
}
