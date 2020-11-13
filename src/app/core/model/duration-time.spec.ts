import { DurationTime } from './duration-time';

describe('#DurationTime', () => {
  it('should create an instance', () => {
    expect(new DurationTime(1)).toBeTruthy();
  });
});

describe('#DurationTime', () => {
  it('should give duration', () => {
    let duration = new DurationTime(91);
    expect(duration.getDuration()).toEqual('1h 31min');
  });
});
