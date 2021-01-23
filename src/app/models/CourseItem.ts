import { ICourseItem } from './ICourseItem';

export class CourseItem implements ICourseItem {
    title: string;
    description: string;
    creationDate: Date;
    duration: number;

    constructor(title, description, creationDate, duration){
        this.title = title;
        this.description = description;
        this.creationDate = creationDate;
        this.duration = duration;
    }
}