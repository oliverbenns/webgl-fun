class Timer {
  public count: number;
  public progress: number;

  private duration: number;
  private offset: number;

  constructor(duration: number, offset = 0) {
    this.count = 0;
    this.duration = duration;
    this.offset = offset;
    this.progress = offset;
  }

  update(deltaTime: number) {
    const incrementTime = deltaTime / this.duration;

    this.progress += incrementTime;

    if (this.progress > 1) {
      this.progress = 0;
      // Does this work when we have an offset?
      // Is the point we mark a 'count' when we've met 1 or the offset value e.g. 0.5
      this.count += 1;
    }
  }
}

export default Timer;
