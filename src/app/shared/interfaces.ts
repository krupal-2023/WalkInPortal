
export interface IJobRole {
    title: string;
    image: string;
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
    email : string;
    countryCode : string;
    phoneNumber : string;
    resumePath : string;
    portfolioUrl? : string;
    preferredJobRoles : string[];
    referralName? : string
    sendJobRelatedMails : boolean;
}