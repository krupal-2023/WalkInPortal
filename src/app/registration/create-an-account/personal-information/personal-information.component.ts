import { Component, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { instructionalDesigner, softwareEngineer, softwareQualityEngineer } from 'src/app/shared/data/jobRoles';
import { IEducationalQualification, IJobRole, IPersonalInformation } from 'src/app/shared/interfaces';
import { DISPLAY_PICTURE_PATH } from 'src/app/shared/paths';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.scss'],
})
export class PersonalInformationComponent implements AfterViewInit {
  
  DISPLAY_PICTURE_PATH: string = DISPLAY_PICTURE_PATH;

  personalInformation: IPersonalInformation | undefined;

  jobRoles: IJobRole[] = [
    instructionalDesigner,
    softwareEngineer,
    softwareQualityEngineer
  ];

  singleTextInputs: string[] = [
    'firstName',
    'lastName',
    'email',
    'countryCode',
    'phoneNumber',
    'portfolioUrl',
    'referralName',
  ];

  displayPictureDataUrl: string = '';
  resumePath: string = '';

  @Input() savedPersonalInformation: IPersonalInformation | undefined =
    undefined;

  @Output() updateCurrentStepNumber: EventEmitter<any> =
    new EventEmitter<any>();

  @Output() savePersonalInformation: EventEmitter<IPersonalInformation> =
    new EventEmitter<IPersonalInformation>();

  @Input()
  educationalQualification:IEducationalQualification|undefined;

  loadSavedData():void {
    if(this.savedPersonalInformation != undefined) {
      
      //fill all input text fields
      for( let attribute of this.singleTextInputs) {
        (document.getElementById(attribute) as HTMLInputElement).value = this.savedPersonalInformation[attribute as keyof IPersonalInformation] as string;
      }

      //check selected job roles
      for( let jobRole of this.jobRoles ) {
        if(this.savedPersonalInformation['preferredJobRoles'].includes(jobRole.id)) {
          let checkbox:HTMLInputElement = document.getElementById(`jobRole${jobRole.id}`) as HTMLInputElement;
          checkbox.checked = true;
        }
      }

      //send job related mails (checkbox)
      if(this.savedPersonalInformation['sendJobRelatedMails']) {
        (document.getElementById('sendMeJobRelatedMails') as HTMLInputElement ).checked = true;
      }

      //update resume Name
      (document.getElementById('uploadedResumeName') as HTMLDivElement ).innerHTML = this.savedPersonalInformation['resumePath'];

      //upload display picture
      let avatar: HTMLImageElement = document.getElementById(
        'avatar'
      ) as HTMLImageElement;
      avatar.src = this.savedPersonalInformation.displayPictureDataUrl; 
    }
  }

  ngAfterViewInit(): void {
    this.loadSavedData();
  }

  onImageUpload(event: Event): void {
    let uploadDisplayPicture: HTMLInputElement = document.getElementById(
      'uploadDisplayPicture'
    ) as HTMLInputElement;
    let avatar: HTMLImageElement = document.getElementById(
      'avatar'
    ) as HTMLImageElement;

    let fileReader: FileReader = new FileReader();
    if (uploadDisplayPicture != null && uploadDisplayPicture.files != null) {
      fileReader.readAsDataURL(uploadDisplayPicture.files[0]);
    }
    fileReader.onload = (fileReaderEvent) => {
      const dataUrl:string = fileReaderEvent.target?.result as string;
      avatar.src = dataUrl;   
      //save display picture
      this.displayPictureDataUrl = dataUrl;
    };
  }

  onResumeUpload(event: Event): void {
    let uploadResume: HTMLInputElement = document.getElementById(
      'uploadResume'
    ) as HTMLInputElement;
    let uploadedResumeName: HTMLDivElement = document.getElementById(
      'uploadedResumeName'
    ) as HTMLDivElement;

    if (uploadResume && uploadResume.files) {
      this.resumePath = uploadResume.files[0].name as string;
      uploadedResumeName.innerHTML = this.resumePath;
    }
  }

  onClickNext(event: Event): void {
    event.preventDefault();

    //check if any field is empty
    const tempPersonalInformation: any = {};
    for (let singleTextInput of this.singleTextInputs) {
      let element = document.getElementById(
        singleTextInput
      ) as HTMLInputElement;
      let value = element.value;
      if (value == '') {
        // alert('All Fields are Required !!!');
        // element.focus();
        // return;
      } else {
        tempPersonalInformation[singleTextInput] = value;
      }
    }

    // check for job roles (checkbox)
    let preferredJobRolesId: number[] = [];
    for (let jobRole of this.jobRoles) {
      if (
        (document.getElementById(`jobRole${jobRole.id}`) as HTMLInputElement).checked
      ) {
        preferredJobRolesId.push(jobRole.id);
      }
    }
    tempPersonalInformation['preferredJobRoles'] = preferredJobRolesId;

    // display picture path and resume path
    tempPersonalInformation['displayPictureDataUrl'] = this.displayPictureDataUrl;
    tempPersonalInformation['resumePath'] = this.resumePath;

    //check if user wants further mails
    tempPersonalInformation['sendJobRelatedMails'] = (
      document.getElementById('sendMeJobRelatedMails') as HTMLInputElement
    ).checked;

    this.personalInformation = tempPersonalInformation as IPersonalInformation;

    //savePersonalInformation
    this.savePersonalInformation.emit(this.personalInformation);

    //jump to next page
    this.updateCurrentStepNumber.emit(2);
  }
}
