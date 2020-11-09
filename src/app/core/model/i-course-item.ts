import { DurationTime } from 'src/app/core/model/duration-time';

export interface ICourseItem {
  title: string;
  description: string;
  creationDate: Date;
  duration: DurationTime;

  getDate(): string;
  getDuration(): string;
}
