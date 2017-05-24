# 情報基礎2 #06

N.Shimizu (chiko@tom.sfc.keio.ac.jp)

---

## 前回までの内容

~~~javascript
const GU = 0;
const CHOKI = 1;
const PA = 2;

let matches = 0;

function countup() {
  matches = matches + 1
  return matches;
}

// チョキ大好きマンに対するアクション
function actionAgainstChokiDaisukiman() {
  return GU;
}

// 表か裏かマンに対するアクション
function actionAgainstOmoteUra() {
  const isEven = matches % 2 == 0;
  let result = PA;
  if (isEven) {
    result = GU;
  }
  return result;
}

// 帰ってきた表か裏かマンに対するアクション
function actionAgainstOmoteUra2() {
  const isEven = matches % 3 == 0;
  let result = GU;
  if (isEven) {
    result = CHOKI;
  }
  return result;
}

function actionAgainstRotation() {
  const toReturnChoki = matches % 3 == 0;
  const toReturnPa = matches % 3 == 1;
  let result = GU;

  if (toReturnChoki) {
    result = CHOKI;
  } else if (toReturnPa) {
    result = PA;
  } else {
    result = GU;
  }

  return result;
}

/*
対戦相手名前まとめ
チョキ大好きマン： fighter::choki-lover 
表か裏かマン：fighter::odd-even
帰ってきた表か裏かマン：fighter::on-third
順番に出していくマン：fighter::rotation
*/

function action(oppornent) {
  console.log(oppornent);
  let result = GU;
  countup();
  if (oppornent == "fighter::choki-lover") {
    result = actionAgainstChokiDaisukiman();
  } else if (oppornent == "fighter::odd-even") {
    result = actionAgainstOmoteUra();
  } else if (oppornent == "fighter::rotation") {
    result = actionAgainstRotation();
  } else {
    result = actionAgainstOmoteUra2();
  }

  return result;
}
~~~

[こちらでもコードが見られます](https://gist.github.com/chikoski/005768dd5294043ab8b72a4e54cd8b28)

---

## 練習問題1

* 作業ブランチをmasterへ変更してください

---

## マージ（merge）

* 他のブランチの変更を反映する作業です
* 手順：
  * 作業ブランチを、マージ先のものに変更します
  * メニューのranch"から、"merge into"を選びます
  * プルダウンから、マージ元のブランチを選びます
  * "merge"ボタンを押します

---

## 練習問題2

* マージを行なってください
* マージ元："lecture04"ブランチ
* マージ先："master"ブランチ

---

## 練習問題3

* "sffcjs/master"の更新を反映してください
* 手順
  * 作業ブランチを"master"ブランチへ戻します
  * "Sync"ボタンを押します
  * "update from sfcjs/master"ボタンを押します

---

## 練習問題4

* "lecture05"というブランチを作ってください

---

## 練習問題5

~~~javascript
let randomValue = Math.random();
let randomInt = Math.floor(randomValue * 100);
~~~

* ランダムに手を決める戦略`randomCard`を追加してください
* これをデフォルトの戦略に設定してください
* `Math.random`を呼ぶと、0.0 - 1.0の乱数を取得できます

---

## 配列：値を並べたリスト

~~~javascript
function action(oppornent){
  const list = cards();
  console.log(list);
  return 1;
}
~~~

* `card`関数を呼ぶと、相手の手の履歴を取得できます
* 履歴は配列に格納されています

---

## 配列の長さ：要素の数

~~~javascript
function action(oppornent){
  cost list = cards();
  console.log(list);
  console.log(list.length);
  return 1;
}
~~~

* 要素：配列に保存されている値
* `{配列名}.length`
* 属性：配列自体に関する情報

---

## 練習問題6

* `matches`を使わなくても試合数がわかります
* ヒント：
   * `cards`：これまで相手が出した手
   * 配列の長さ  
* 動作を確認して、変更をコミットしてください

---

## 配列の要素の参照

~~~javascript
function action(oppornent){
  const list = cards();
  const index = Math.max(0, list.length - 1);
  const lastCard = list[index];
  console.log(lastCard);
  return 1;
}
~~~

* 添え字を使って各要素にアクセスします
* 添え字は`[]`の中に数字を書いて指定します
* 添え字は0からスタートします

---

## 練習問題7

* 帰ってきた順番に出すマンに勝つ戦略を追加してください

---

## 練習問題8

* ふぃずばずマンに勝つ戦略を追加してください

---

## 練習問題9

* `lecture05`を`master`へマージしてください
* マージしたらpull requestを送ってください
