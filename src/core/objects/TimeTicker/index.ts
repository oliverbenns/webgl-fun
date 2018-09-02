class TimeTicker {
  public totalElapsed?: number;
  public deltaTime: number;
  private lastTick: number;

  constructor() {
    this.deltaTime = 0;
    this.lastTick = Date.now();
  }

  tick() {
    const now = Date.now();

    this.deltaTime = (now - this.lastTick) / 1000;
    this.lastTick = now;
  }
}

export default TimeTicker
