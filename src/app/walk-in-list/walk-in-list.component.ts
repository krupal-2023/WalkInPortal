import { Component } from '@angular/core';
import { IWalkInListItem } from '../shared/interfaces';
import { walkInListJson } from '../shared/data/walkInList'

@Component({
  selector: 'app-walk-in-list',
  templateUrl: './walk-in-list.component.html',
  styleUrls: ['./walk-in-list.component.scss']
})
export class WalkInListComponent {

  walkInList:IWalkInListItem[] = walkInListJson;
  
   
}


