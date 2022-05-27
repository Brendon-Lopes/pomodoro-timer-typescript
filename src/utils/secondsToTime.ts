function secondsToTime(seconds: number): string {
  const minutes = Math.floor(seconds / 60);
  const sec = (seconds % 60).toString().padStart(2, '0');
  return `${minutes}:${sec}`;
}

export default secondsToTime;
