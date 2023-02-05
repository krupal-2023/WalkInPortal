import {IWalkInListItem} from '../interfaces';
import { instructionalDesigner, softwareEngineer, softwareQualityEngineer} from './jobRoles';

export let walkInListJson:IWalkInListItem[] = [
    {
      title: 'Walk In for Designer Job Role',
      startDate: new Date('2021-07-10'),
      endDate: new Date('2021-07-11'),
      location: 'Mumbai',
      jobRoles: [instructionalDesigner],
      isExpires: true,
    },
    {
      title: 'Walk In for Multiple Job Roles',
      startDate: new Date('2021-07-03'),
      endDate: new Date('2021-07-04'),
      location: 'Mumbai',
      jobRoles: [instructionalDesigner,softwareEngineer,softwareQualityEngineer],
      additionalTags: ['Internship Opportunity for MCA Students']
    },
    {
      title: 'Walk In for Design and Development Job Role',
      startDate: new Date('2021-07-10'),
      endDate: new Date('2021-07-11'),
      location: 'Mumbai',
      jobRoles: [instructionalDesigner,softwareEngineer],
    }
  ] 