# 情報基礎2 #09

N.Shimizu (chiko@tom.sfc.keio.ac.jp)

---

## 次回は休講です

---

## 今日の内容

* DOM操作
  * HTML要素の作成
  * HTML要素に対する文字列の設定
* オブジェクト

---

## documentオブジェクト

~~~javascript
console.log(document);
~~~

* 表示されているHTML文書を表すオブジェクトです
* これを操作することで、表示を切り替えます

---

## HTML要素の追加

~~~javascript
let el = document.createElement("p");
document.body.appendChild(el);
~~~

* [`document.createElement`](https://developer.mozilla.org/ja/docs/Web/API/Document/createElement)で、要素を作成できます
* `document.body.appendChild`：
  * 要素を`body`要素に追加できます
  * [`document.body`](https://developer.mozilla.org/ja/docs/Web/API/Document/body)
  * [`appendChild`](https://developer.mozilla.org/ja/docs/Web/API/Node/appendChild)

---

## 要素にテキストコンテントを設定

~~~javascript
let el = document.createElement("p");
el.textContent = "こんにちは、せかい";
document.body.appendChild(el);
~~~

* 文字列をブラウザに表示させるために必要です
* `textContent`属性に文字列を代入します

---

## 配列とHTML要素の操作

~~~javascript
let list = ["A", "B", "C", "D", "E"];
let index = 0;
while(index < list.length){
  let text = list[index];
  let el = document.createElement("p");
  el.textContent = text;
  document.body.appendChild(el);
  index = index + 1;
}
~~~

* 繰り返し文を使って、各要素をHTMLに出力します

---

## オブジェクト

~~~javascript
let life = 100;
let name = "A hero";
let attach = 15;
let defence = 8;

let player = {
  name: "A hero",
  life: 100,
  attack: 15,
  defence: 8
};
~~~

* 複数のデータをまとめられます
* まとめられた項目を「属性」と呼びます

---

## 属性値の参照

~~~javascript
let player = {
  name: "A hero",
  life: 100,
  attack: 15,
  defence: 8
};
console.log(player.name);
~~~

* `変数名.属性名`で属性値を参照できます

---

## 属性値の変更

~~~javascript
let attack = 20;
let player = {
  name: "A hero",
  life: 100,
  attack: 15,
  defence: 8
};
player.life = player.life - (attack - player.defence);
~~~

* 属性には`=`演算子で代入ができます

---

## 関数とオブジェクト

~~~javascript
function hero(name){
  let result = {
    name: name,
    life: 100,
    attack: 15,
    defence: 8
  };
  return result;
}
let player = hero("A hero");
let player2 = hero("Another hero");
~~~

* 関数の引数や、返り値にできます

---

## オブジェクトと配列

~~~javascript
let players = [
  hero("Player 1"), hero("Player 2"), hero("Player 3"), 
  hero("Player 4"), hero("Player 5"), hero("Player 6"), 
];
let player1 = players[0];
console.log(player1.name); // "Player 1"
~~~

* オブジェクトは配列の要素とできます

---

## 練習問題

* 写真付きの名簿を作成しましょう
* ヒント：
  * `img`要素を作成すれば、画像を表示できます
  * `src`属性に表示する画像のURLを設定します

---

## 課題

* 最終発表のグループ（2名）を作成してください
* 作成したら、[こちらのフォーム](https://docs.google.com/forms/d/e/1FAIpQLScTpnA0Z3emL0--sGCC8AuyFbkg0z_OzFuMRGwoSStoPzd7cw/viewform?usp=sf_link)へ記入してください
* フォームへの記入は、それぞれ行ってください