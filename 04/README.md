# 情報技術基礎2 #04

N.Shimizu (chiko@tom.sfc.keio.ac.jp)

---

## 前回のまとめ

~~~javascript
const GU = 0;
const CHOKI = 1;

let counter = 0;
function action(oppornent){
  counter = counter + 1;
  const isEven = counter % 2 == 0;
  let myAction = CHOKI;
  if(isEven){
    myAction = GU;    
  }
  return myAction;
}
~~~

* 名前の種類：変数/定数
* データの種類：数値型/論理型
* 異なるデータには異なる演算：数値演算/比較演算

---

## 練習問題1

~~~sh
% npm run serve
~~~

* 新しい対戦相手がjankenに加わりました
* jankenのmasterブランチを更新してください
* 更新したらWebサーバを起動して、変更を確認してください

---

## 練習問題2

* "lecture04"というブランチを作ってください
* 「帰ってきた表か裏かマン」に勝ちましょう
* 勝てたら、変更をコミットしてください

---

## 今日の内容

* JavaScript
  * 関数の定義、スコープ
  * 文字列型と比較演算
* 戦略を使い分けるプレーヤーの実装
* Git：マージ

---

## 関数定義

~~~javascript
function abs(value){
  let result = value;
  if(result < 0){
    result = result * -1;
  }
  return result;
}
~~~

* 関数定義：意味ある仕事の塊に名前をつけること
* 定義に必要なもの：名前、引数リスト、関数本体

---

## 練習問題3

* 作業するブランチを"master"へ戻してください
* そして"playground"というブランチを追加してください
* 追加後、`docs/player.js`をエディタで開いてください

---

## 練習問題4

~~~javascript
function abs(value){
  let result = value;
  if(result < 0){
    result = result * -1;
  }
  return result;
}
~~~

* 上記の関数を`docs/player.js`に追加してください

----

### 練習問題4（つづき）

~~~javascript
abs(-10)
~~~

* 関数が呼び出せることを確認してください
  * メニューから「開発ツール」→「Webコンソール」
  * コンソールへ上記のように入力します
* 確認したら、変更をコミットしてください

---

### 練習問題5

~~~javascript
distance(0, 5); // 5
distance(-5, 5); // 10
distance(5, -10); // 15
~~~

* 数直線上の距離を計算する関数を定義してください
  * 関数名：`distance`
  * `docs/player.js`に定義を記述してください
* ヒント：先ほど定義した`abs`関数を呼ぶと楽です

---

## スコープ：変数の有効範囲

~~~javascript
let counter = 0; // counterはaction, showCounterで有効
function action(oppornent){
  counter = counter + 1; 
  let myAction = CHOKI; // myActionはこの関数のみで有効
  if(counter % 2 == 0){
    myAction = GU;    
  }
  return myAction;
}
function showCounter(){
  console.log(counter);
}
~~~

* 変数は宣言されたブロック内でのみ有効です
  * `let`/`const`文の場合
  * `var`文の場合は異なります
* ブロックスコープ：このような変数の有効範囲

----

### シャドウイング (shadowing)

~~~javascript
let counter = 0;
function increment(){
  counter = counter + 1;
  return counter;
}
function showCounter(){
  let counter = 0;
  console.log(counter);
}
~~~

* 上記の例では、同じ名前の変数が、より狭いブロックで宣言されています
* この場合、狭いブロック内の変数が優先されます
* このような振る舞いを「シャドウイング」と呼びます

---

## 練習問題6

* 作業するブランチを"lecture04"に変更してください

---

## 練習問題7

* 練習問題2で実装した処理を、関数にしてください
* 関数名は`actionAgainstOmoteUra2`としてください
* `action`からその関数を呼び、動作を確認してください
* 確認したら、変更をコミットしてください

---

## 練習問題8

* 以下の処理を、それぞれ別の関数に実装してください
  * 「チョキ大好きマン」への処理
  * 「表か裏かマン」への処理
* ヒント：GitHubで過去の変更内容を確認できます

---

## 文字列

~~~javascript
let a = "Hello, world";
console.log(a);
~~~

* 文字列：0 個以上の文字のならび
  * ' と ' で挟まれたものは文字列となります
  * " と " で挟まれたものも文字列となります
* c.f. [String](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/String)

----

### 文字列と文字列の比較

 |演算子|意味|使用例|`a = "abcd"`の時の評価値|
|----|----|----|-----|
|`==`|等しい|`a == "defg"`|`false`|
|`!=`|等しくない|`a != "defg"`|`true`|
|`>`|より大きい|`a > "defg"`|`false`|
|`<`|より小さい|`a < "defg"`|`true`|
|`>=`|以上|`a >= "defg"`|`false`|
|`<=`|以下|`a <= "defg"`|`true`|

* 順序の比較は辞書式に行われます
* 日本語との比較には注意が必要です

----

### 数値と文字列との比較

~~~javascript
let str = "10"
let num = 10;
console.log(str == num); // true
console.log(str === num); // false
~~~

* `10`と`"10"`は違う値です
* `==`演算はデータを暗黙的に変換して比較してしまうため、`10 == "10"`の評価値は `true` となります
* 厳密に区別する場合は`===`演算子を利用します

---

## 練習問題8

* `action`関数の第1引数は対戦相手の名前です
* これを利用して`action`関数を変更してください
   * 変更内容：相手に応じた戦略の選択
   * 相手に合わせて呼ぶ関数を選びます
* 動作を確認したら、変更をコミットしてください

---

## マージ（merge）

* 他のブランチの変更を反映する作業です
* 手順：
  * 作業ブランチを、マージ先のものに変更します
  * メニューのranch"から、"merge into"を選びます
  * プルダウンから、マージ元のブランチを選びます
  * "merge"ボタンを押します

---

## 練習問題9

* マージを行なってください
  * マージ元："lecture04"ブランチ
  * マージ先："master"ブランチ
* その変更をpull requestとして送ってください