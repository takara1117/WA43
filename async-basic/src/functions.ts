export function sleep(mills: number): void {
  const startTime = new Date();
  const startTimeInMills = startTime.getTime();
  let endTimeInMills = startTimeInMills;
  while (endTimeInMills - startTimeInMills < mills) {
    const endTime = new Date();
    endTimeInMills = endTime.getTime();
  }
}

export async function getMsg(): Promise<string> {
  sleep(1000);
  const width = Math.round(Math.random() * 10);
  const height = Math.round(Math.random() * 10);
  const area = width * height;
  return `縦が${height}で横が${width}の面積は${area}です。`;
}
