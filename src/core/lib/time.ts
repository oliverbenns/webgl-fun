const time = {
  lastTick: Date.now(),
  tick: function() {
    const now = Date.now();

    const deltaTime = (now - this.lastTick) / 1000;
    this.lastTick = now;
    return deltaTime;
  },
}
export default time
