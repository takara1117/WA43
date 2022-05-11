import { GirlFriend } from "./GirlFriend";

const birthdayData = [
  new GirlFriend("まゆみちゃん", 1998, 1, 5),
  new GirlFriend("まちこちゃん", 2003, 5, 15),
  new GirlFriend("まいちゃん", 1996, 5, 25),
  new GirlFriend("なみちゃん", 1999, 8, 3),
  new GirlFriend("えりちゃん", 2001, 11, 19),
  new GirlFriend("りえちゃん", 1997, 12, 23),
];

for (let month = 1; month <= 12; month++) {
  let cnt = 0;
  console.log(`■■■■ ${month}月です。`);

  for (const girlFriend of birthdayData) {
    if (girlFriend.isBirthMonth(month)) {
      console.log(
        `${girlFriend.name}が${
          girlFriend.birthDay
        }日に誕生日です。${girlFriend.getAge(
          2022
        )}歳になります。メッセージを送りましょう!!`
      );
      cnt++;
    }
  }
  if (cnt == 0) {
    console.log("誕生日を迎える女性はいません。安心してください。");
  }
}
