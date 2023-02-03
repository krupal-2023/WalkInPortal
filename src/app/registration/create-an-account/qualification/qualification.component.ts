import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-qualification',
  templateUrl: './qualification.component.html',
  styleUrls: ['./qualification.component.scss']
})
export class QualificationComponent {

  @Output() 
  updateCurrentStepNumber:EventEmitter<any> = new EventEmitter<any>();
}
