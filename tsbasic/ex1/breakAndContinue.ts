export {};

const numes: number[] = [];
const denomis: number[] = [];

for (let i = 0; i <= 4; i++) {
  numes[i] = Math.round(Math.random() * 10);
  denomis[i] = Math.round(Math.random() * 10);
}

for (const denomi of denomis) {
  console.log(`■分母の値: ${denomi}`);
  if (denomi == 0) {
    console.log("分母が０なので処理を中止します");
    break;
  }
  for (const nume of numes) {
    console.log(`--分子の値： ${nume}`);
    if (nume == 0) {
      console.log("→文治が０なので次の分子にスキップします");
      continue;
    }
    const ans = nume / denomi;
    console.log(`→分数値：${ans}`);
  }
}
