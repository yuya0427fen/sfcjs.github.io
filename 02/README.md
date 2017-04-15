# 情報基礎2 #02

N.Shimizu (chiko@tom.sfc.keio.ac.jp)

---

## 前回：GitHubの操作

* バージョン管理システム
* Fork / clone
* Commit
* Pull request

---

## 練習問題 1

* [https://github.com/sfcjs/2017s-02/](https://github.com/sfcjs/2017s-02/) をforkして、cloneしよう
* cloneしたら以下の作業をしてください：
  1. `githubのユーザ名.md`という名前のファイルをつくり
  2. 「出席してます」とファイルに記述し
  3. Commitして
  4. Pull requestを送ってください

---

## じゃんけんで対戦するプログラム

* じゃんけんで対戦相手に勝つためのプログラムを作りましょう
* しばらくはこの教材を利用します
* 対戦相手は何人もいて、それぞれに戦略がことなります
* [デモ](https://sfcjs.github.io/janken/)
* [https://github.com/sfcjs/janken](https://github.com/sfcjs/janken)

----

### レポジトリをフォークしよう

* レポジトリをコピーすることを「フォーク」と呼びます
* [元のレポジトリ](https://github.com/sfcjs/janken)へアクセスします
* "fork" というボタンを押しましょう

----

### フォークしたレポジトリをクローンしよう

1. "Clone or download repository"と書かれたボタンをクリックします
2. GitHub Desktopが起動するので、コピー先のフォルダを選びます

----

### ターミナルでそのフォルダを開こう

1. GitHub Desktopの右にあるメニューから"janken"を探します
2. 見つけた"janken"の上で右クリック（Ctrlを押しながらクリック）します
3. "Open in Terminal"を選びます

----

### 依存するライブラリをインストールします

~~~sh
$ npm install
~~~

* 上記のコマンドを実行すると、依存するライブラリがインストールされます
* node_modulesというフォルダが作成されればokです
* この作業は、最初の1回だけ実行すればokです

----

### サーバの起動

~~~sh
$ npm run serve
~~~

* 上記のコマンドを実行すると、Webサーバが起動します
* [http://localhost:8888/](http://localhost:8888/)にアクセスできるようになります
* アクセスすると、じゃんけんの勝負ができるようになります

----

### サーバの終了

~~~sh
npm run serve

> zyanken@1.0.0 serve /Users/chiko/git/sfcjs/janken
> http-server docs -p 8888 -c-1

Starting up http-server, serving docs
Available on:
  http://127.0.0.1:8888
Hit CTRL-C to stop the server
~~~

* サーバが起動しているターミナルには上記のように表示されています
* Ctrlキーを押しつつ、cを押すと、サーバが終了します

---

## フォルダの構成

* docs：サーバで配信されるファイルが保存されています
* src: ここのファイルを元にdocs/index.jsが作成されます
* package.json：このアプリの情報が記述されています
* yarn.lock：依存ライブラリが列挙されています
* webpack.config.js：docs/index.jsを作成する際に必要となるファイルです

----

### docsフォルダの内容物

* index.html：[http:/localhost:8888/](http:/localhost:8888/)で配信されるHTMLファイル
* index.css：index.htmlで利用するスタイルシート
* index.js：じゃんけんシステムのプログラム
* plyaer.js：自分の手を決めるプログラムを書くファイル

----

### docs/player.jsの初期状態

~~~javascript
function action(){
  return 1;
}
~~~

* `action`の返り値によって出す手が決まります
* 1は「チョキ」を出す、という意味になります

---

## パーを出すプログラムへ変更するには

|返り値|意味|
|-----|---|
|0|グーを出す|
|1|チョキを出す|
|2|パーを出す|

----

### パーを出すプログラムへ変更するには

~~~javascript
function action(){
  return 0;
}
~~~

----

### パーを出すプログラムへ変更するには

~~~javascript
const GU = 0;
const CHOKI = 1;
const PA = 2;

function action(){
  return PA;
}
~~~

---

## 練習問題2：チョキ大好きマンに勝とう

---

## 試合数を覚えておこう

~~~javascript
const GU = 0;
const CHOKI = 1;
const PA = 2;
let matches = 0;

function action(){
  matches = matches + 1;
  return PA;
}
~~~

---

## 数値

~~~javascript
1
-1
3.1415926535
-12345.6789
~~~

* 符号つきの実数
* Number という種類の値
* 32 ビットの浮動小数点

---

## 定数

~~~javascript
const GU = 0;
const CHOKI = 1;
const PA = 2;
~~~

* 値に対して特定の名前をつけること
* 1度しか代入ができません
* 名前は`const`キーワードを使って宣言します

---

## 変数

~~~javascript
let matches = 0;

function action(){
  matches = matches + 1;
  return PA;
}
~~~

* 値につ対して特定の名前をつけること
* 2回以上代入できます
* 名前は`let`キーワードを使って宣言します

---

## 数値演算

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

|優先度|演算子|結合性|
|-----|----|----|
|19|(…)|n/a|
|14|\* / %|左結合|
|13|\- \+|左結合|

* 大きい優先度を持つものが先に評価されます
* カッコをつけると、その式が先に評価されます
* c.f [演算子の優先度](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)

----

### 複数の演算子が混ざった式

~~~javascript
1 + 2 * 3
(1 + 2) * 3
1 + 2 - 2 * 3 / 3
1 + (2 - 2) * 3 / 3
(1 + (2 - 2)) * 3 / 3
~~~

* 内側のカッコが先に計算されます

----

### 左結合

~~~
1 + 2 + 3
(1 + 2) + 3
~~~

* 同じ優先度の演算が並んでいる場合は、左側のものが先に計算されます
* このことを左結合と言います

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

### 代入演算子 =

|優先度|演算子|結合性|
|-----|----|----|
|19|(…)|n/a|
|14|\* / %|左結合|
|13|\- \+|左結合|
|3|=|右結合|

* 代入演算子の優先度は低く、ほとんどの演算の後に評価されます
* 評価値は代入された値です
* 代入が並んだ場合、右から順に評価されます

----

### 右結合

~~~javascript
let a, b, c;
a = b = c = 10;
a = b = 10;
a = 10;
~~~

* 右から順に評価されます
* 上記の例では、すべての変数に 10 が代入されます

---

## 練習問題3：交互に出すマンに勝とう

---

## 練習問題4：順番に出すマンに勝とう
