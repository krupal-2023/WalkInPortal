import { Component, Input } from '@angular/core';
import { IWalkInListItem } from 'src/app/shared/interfaces';
import { instructionalDesigner } from 'src/assets/data/jobRoles';

@Component({
  selector: 'app-walk-in-list-item',
  templateUrl: './walk-in-list-item.component.html',
  styleUrls: ['./walk-in-list-item.component.scss'],
})
export class WalkInListItemComponent {
  @Input() walkInListItem: IWalkInListItem ={
    title: 'Walk In for Designer Job Role',
    startDate: new Date('2021-07-10'),
    endDate: new Date('2021-07-11'),
    location: 'Mumbai',
    jobRoles: [instructionalDesigner],
    isExpires: true,
  };

  dateToString(date: Date): string {
    return `${date.getDate()}-${months[date.getMonth()]}-${date.getFullYear()}`;
  }
}


const months: string[] = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Nov',
  'Dec',
];