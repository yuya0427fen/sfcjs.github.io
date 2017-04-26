# 情報基礎2 #03

N.Shimizu (chiko@tom.sfc.keio.ac.jp)

---

## 前回のまとめ

* Webの構成要素：HTTP / HTML / URL
* URL→ホスト名→IPアドレス
* サーバとクライアント

---

## 練習問題その1：出席

* https://github.com/sfcjs/attendance にプルリクエストを送ってください
* `03/{GitHubのユーザID}.md`というファイルを作ってください

----

### 練習問題その1：作業方法

1. Syncボタンを押してください：GitHub上のデータを取ってきます
2. ブランチを作成する際に、`sfcjs/master`を基準に作成します
3. 指定されたファイルを作成します
4. CommitしてPull requestを送ります

---

## じゃんけんで対戦するプログラム

* じゃんけんで対戦相手に勝つためのプログラムを作りましょう
* しばらくはこの教材を利用します
* 対戦相手は何人もいて、それぞれに戦略がことなります
* [デモ](https://sfcjs.github.io/janken/)
* [https://github.com/sfcjs/janken](https://github.com/sfcjs/janken)

---

## 練習問題2：Webサーバを起動しよう

~~~sh
$ npm run serve
~~~

* `janken`レポジトリをターミナルで開きます
* ターミナル上で、上記のコマンドを実行します
* [http://localhost:8888/](http://localhost:8888/)にブラウザでアクセスして、動作を確認します

---

## 前回作成したプログラム

~~~javascript
function action(oppornent){
  return 0;
}
~~~

* この関数の返り値が、自分の手になります
* `0`はグーを表します

----

### 返り値の意味


|返り値|意味|
|-----|---|
|0|グーを出す|
|1|チョキを出す|
|2|パーを出す|

---

## 値の意味をわかりやすくしよう

~~~javascript
const GU = 0;
const CHOKI = 1;
const PA = 2;

function action(){
  return GU;
}
~~~

* `const`は値につける名前を宣言するキーワード
* `=`で右辺の値に左辺の名前をつけます（代入）

---

## 練習問題3：表か裏かマンに勝とう

* どうやれば勝てるかをまず考えよう

----

### 表か裏かマンの出す手

* 試合数が偶数のとき：チョキ
* 試合数が奇数のとき：グー

----

### 完全に勝つには

|試合数|表か裏かマンの手|自分の手|
|-----|------------|------|
|偶数|チョキ|グー|
|奇数|グー|パー|

----

### 完全に勝つには

* 試合数に合わせて手を決めていきます
* その為には、試合数を記録しておく必要があります
* その試合数を「偶数」の場合と「奇数」の場合に分けます
* それぞれのケースに合わせた手を出すことが必要です

---

## 変数

~~~javascript
let matches = 0;
function action(oppornent){
  matches = matches + 1;
  console.log(matches);
  return GU;
}
~~~

* `const`で変数に名前をつけられました
* ただし、代入は1回しかできません
* 2回以上代入する場合は、`let`キーワードを使います

----

### 数値演算

|演算子|意味|例|値|
|----|---|--|-|
|\+|足し算|8 + 5|13|
|\-|引き算|8 - 5|3|
|\*|掛け算|8 * 5|40|
|/|割り算|8 / 5|1.6|
|%|割り算のあまり|8 % 5|3|

* 数値と数値の演算を数値演算と呼びます
* 上記の演算子を用いて演算を記述します

----

### 演算子の優先度

~~~javascript
let a = 0;
a = 1 + 2 + 3;
a = 1 * 2 + 3;
a = 1 + 2 * 3;
a = (1 + 2) + 3;
~~~

----

|優先度|演算子|結合性|
|-----|----|----|
|19|(…)|n/a|
|14|\* / %|左結合|
|13|\- \+|左結合|

* 大きい優先度を持つものが先に評価されます
* カッコをつけると、その式が先に評価されます
* c.f [演算子の優先度](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)

----

## 代入演算子 =

|優先度|演算子|結合性|
|-----|----|----|
|19|(…)|n/a|
|14|\* / %|左結合|
|13|\- \+|左結合|
|3|=|右結合|

* 代入演算子の優先度は低く、ほとんどの演算の後に評価されます
* 評価値は代入された値です
* 代入が並んだ場合、右から順に評価されます

---

## 偶数か奇数かを判定するには

~~~ javascript
let matches = 0;
function action(oppornent){
  matches = matches + 1;
  const remainder = matches % 2;
  const isEven = remainder == 0;
  console.log(`${matches} % 2 = ${remainder} : ${isEven}`);
  return GU;
}
~~~

* その数値を2で割って、その余りが
  * 0ならば偶数
  * 1ならば奇数
* `==` 演算子で、右辺と左辺の値が等しいことを確認します

----

### 数値同士の比較演算

|演算子|意味|使用例|a = 10 の時の評価値|
|----|----|----|-----|
|==|等しい|a == 10|true|
|!=|等しくない|a != 10|false|
|>|より大きい|a > 10|false|
|<|より小さい|a < 10|false|
|>=|以上|a >= 10|true|
|<=|以下|a <= 10|true|

----

### 真偽値

~~~javascript
let a, b;
a = true;
b = false;
~~~

* true か false のどちらかである値です
* 論理演算を用いて演算できます

---

## 偶数か奇数かに応じて、手を変えるには

~~~javascript
let matches = 0;
function action(oppornent){
  matches = matches + 1;
  const remainder = matches % 2;
  const isEven = remainder == 0;
  console.log(`${matches} % 2 = ${remainder} : ${isEven}`);
  if(isEvent){
    return GU
  }
  return CHOKI;
}
~~~

----

## 条件分岐

~~~javascript
if(condition()){
  doSpecialAction();
}
doSomething();
~~~

* ある条件が成り立つ場合のみ、特別な処理を行うこと
* if 文を用いて記述します

----

### else 節

~~~javascript
if(condition()){
  caseA();
}else{
  caseB();
}  
~~~

* 「そうでないときはこれをしてください」
* 条件節の評価値が
  * `true` の時：`caseA` が呼ばれる
  * `false` の時：`caseB` が呼ばれる

---

## 評価

~~~javascript
1 + 2 + 3 + 4
3 + 3 + 4
6 + 4
10
~~~

* 値を決めること
* 式：評価して値が決まるもの

---

## 練習問題4：順番に出していくマンと対戦

---

## 練習問題5：問題を修正しよう

* 実は同じ相手と続けて戦うと、勝てなくなります
* 原因を考えて、勝てるように修正しましょう