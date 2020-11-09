const MINS_IN_HOUR: number = 60;

export class DurationTime {
  totalMinutes: number;

  constructor(minutes: number) {
    this.totalMinutes = minutes;
  }

  getDuration(): string {
    let minutes = this.totalMinutes % MINS_IN_HOUR;
    let hours = Math.trunc(this.totalMinutes / MINS_IN_HOUR);
    return `${hours}h ${minutes}min`;
  }
}
