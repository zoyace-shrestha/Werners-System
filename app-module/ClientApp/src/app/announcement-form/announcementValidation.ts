export class AnnouncementValidation {
    titleState: Boolean | null = null;
    descriptionState: Boolean | null = null;
    typeState: Boolean | null = null;
    backgroundState: Boolean | null = null;
    publishDateState: Boolean | null = null;

    valid(){
        return this.titleState !== false 
        && this.descriptionState !== false 
        && this.typeState !== false 
        && this.backgroundState !== false
        && this.publishDateState !== false
    }
};