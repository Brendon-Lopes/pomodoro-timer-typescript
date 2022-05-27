function secondsToTime(seconds: number): string {
  const formatNumber = (n: number) => Math.floor(n).toString().padStart(2, '0');
  const min = formatNumber((seconds / 60) % 60);
  const sec = formatNumber(seconds % 60);
  return `${min}:${sec}`;
}

export default secondsToTime;
