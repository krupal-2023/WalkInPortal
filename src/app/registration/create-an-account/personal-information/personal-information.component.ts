import { Component, Output, EventEmitter } from '@angular/core';
import { IPersonalInformation } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.scss'],
})
export class PersonalInformationComponent {
  personalInformation: IPersonalInformation | undefined;

  jobRoles: string[] = [
    'Instructional Designer',
    'Software Engineer',
    'Software Quality Engineer',
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

  @Output() updateCurrentStepNumber: EventEmitter<any> =
    new EventEmitter<any>();

  onClickNext(event: Event): void {
    //check if any field is empty
    const tempPersonalInformation: any = {};
    for (let singleTextInput of this.singleTextInputs) {
      let element = document.getElementById(
        singleTextInput
      ) as HTMLInputElement;
      let value = element.value;
      if (value == '') {
        alert('All Fields are Required !!!');
        element.focus();
        return;
      } else {
        tempPersonalInformation[singleTextInput] = value;
      }
    }

    //jump to next page
    this.updateCurrentStepNumber.emit(2);
  }
}
