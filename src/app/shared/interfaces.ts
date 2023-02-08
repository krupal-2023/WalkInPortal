
export interface IJobRole {
    id: number;
    title: string;
    image?: string;
}

export interface IWalkInListItem {
    title: string;
    startDate: Date;
    endDate: Date;
    location: string;
    jobRoles: IJobRole[];
    additionalTags?: string[]; 
    isExpires?: boolean;
}

export interface IPersonalInformation {
    firstName : string;
    lastName : string;
    displayPictureDataUrl : string;
    email : string;
    countryCode : string;
    phoneNumber : string;
    resumePath : string;
    portfolioUrl? : string;
    preferredJobRoles : number[];
    referralName? : string
    sendJobRelatedMails : boolean;
}

export interface IEducationalQualification {
    percentage: number;
    yearOfPassingId: number;
    qualificationId: number;
    streamId: number;
    collegeId: number;
    otherCollege: string;
    collegeLocation: string;
}

export interface IProfessionalQualification {
    applicantType: string;
    yearsOfExperience: string;
    currentCTC: string;
    expectedCTC: string;
    expertiseTechnologyIds: number[];
    expertiseOtherTechnology: string;
    familiarTechnologyIds: number[];
    familiarOtherTechnology: string;
    onNoticePeriod: boolean;
    whenNoticePeriodEnds?: string;
    howLongNoticePeriodId: number;
    haveYouAppeared: boolean;
    ifYesWhichRole: string
}