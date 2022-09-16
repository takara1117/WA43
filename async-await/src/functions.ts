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
  const area = await calcArea(width, height);

  const returnPromise = new Promise<string>((resolve, reject): void => {
    if (area >= 10) {
      const returnValue = `縦が${height}で横が${width}の面積は${area}です。`;
      resolve(returnValue);
    } else {
      reject(new Error("計算された面積が10より小さいです。"));
    }
  });
  return returnPromise;
}

async function calcArea(width: number, height: number): Promise<number> {
  sleep(1000);
  return width * height;
}
