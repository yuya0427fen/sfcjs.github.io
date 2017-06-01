# 情報基礎2 #06

N.Shimizu (chiko@tom.sfc.keio.ac.jp)

---

## 前回までの内容

~~~javascript
function actionAgainstReturnedRotaion(matches) {
  if (matches < 3) {
    return CHOKI;
  } else {
    let history = cards();
    let tail = Math.max(0, history.length - 1);
    let lastCard = history[tail];
    let beforeTail = Math.max(0, tail - 1);
    let beforelastCard = history[beforeTail];

    if (lastCard == GU) {
      if (beforelastCard == CHOKI) {
        return PA;
      } else {
        return CHOKI;
      }
    } else if (lastCard == CHOKI) {
      if (beforelastCard == GU) {
        return PA;
      } else {
        return GU;
      }
    } else {
      if (beforelastCard == GU) {
        return CHOKI;
      } else {
        return GU;
      }
    }
  }
}
~~~

---

## 配列：0個以上の値の列

~~~javascript
let list = [1, 1, 2, 3, 5, 8, 13];
let tailIndex = list.length - 1;

let head = list[0];
let tail = list[tailIndex];
~~~

* `length`属性：配列の要素数
* 添え字でそれぞれの要素を参照します
* 添え字は0から始まることに注意してください

----

### 要素の追加

~~~javascript
let list = [1, 1, 2, 3, 5, 8, 13];
console.log("before");
console.log(list);
let index = list.length;
list[index] = 21; // 末尾に要素を追加
console.log("after");
console.log(list);
~~~

----

### 要素の変更：別の値で置き換えられます

~~~javascript
let list = [1, 1, 2, 3, 5, 8, 13];
console.log("before");
console.log(list);
list[0] = 13; // 0番目の要素を13に変更
list[2] = 1;  // 2番目の要素を2に変更
list[4] = 21; // 4番目の要素を21に変更
console.log("after");
console.log(list);
~~~

---

## 論理演算

* 論理値同士の演算です
* 二項演算：論理和、論理積
* 単項演算：否定

----

### 論理和

~~~javascript
let a, b, c, d;
a = true || true; // true
b = true || false; // true
c = false || true; // true
d = false || false; // false
~~~

* || 演算子を用いて記述します 
* 右辺と左辺の評価値がともに false の時のみ false となります
* それ以外の場合はの評価値は true となります

----

### 論理積

~~~javascript
let a, b, c, d;
a = true || true; // true
b = true || false; // false
c = false || true; // false
d = false || false; // false
~~~

* && 演算子を用いて記述します 
* 右辺と左辺の評価値がともに true の時のみ true となります
* それ以外の場合はの評価値は false となります

----

### 否定

~~~javascript
let a, b;
a = !true; // false
b = !false; // true
~~~

* ! 演算子を用いて記述します
* 単項演算子です
* ! の後ろの式の評価値が
    * true の場合は false に評価されます
    * false の場合は true に評価されます

----

### 論理演算でより短く

~~~javascript
if (lastCard == GU) {
  if (beforelastCard == CHOKI) {
    return PA;
  } else {
    return CHOKI;
  }
} else if (lastCard == CHOKI) {
  if (beforelastCard == GU) {
    return PA;
  } else {
    return GU;
  }
} else {
  if (beforelastCard == GU) {
    return CHOKI;
  } else {
    return GU;
  }
}
~~~

----

### 論理演算でより短く（つづき）

~~~javascript
if (lastCard == GU && beforelastCard == CHOKI ||
    lastCard == CHOKI && beforelastCard == GU){
  return PA;
}else if(lastCard == CHOKI && beforelastCard == PA || )
         lastCard == PA && beforelastCard == CHOKI){
  return GU;
}else{
  return CHOKI;
}
~~~

---

## 中間試験の練習

* [こちらのレポジトリに問題があります](https://github.com/sfcjs/js-syntax-wrapup)

---

## 繰り返し：条件の成立する間、同じ処理を繰り返す

~~~javascript 
let counter = 0;
while(counter < 10){
  doSomething();
  counter = counter + 1;
}
~~~

----

### 配列と繰り返し：合計の計算

~~~javascript
let list = [1, 2, 3, 4, 5];
let sum = 0;
let index = 0;
while(index < list.length){
  sum = sum + list[index];
  index = index + 1;
}
console.log(sum);
~~~

----

### 配列と繰り返し：フィルター

~~~javascript
let list = [1, 2, 3, 4, 5];
let result = [];
let index = 0;
while(index < list.length){
  let number = list[index];
  if(number % 2 != 0){
    let tail = result.length;
    result[tail] = number;
  }
  index = index + 1;
}
console.log(result);
~~~

----

### 配列と繰り返し：マップ

~~~javascript
function addOne(value){
  return value + 1;
}
let list = [1, 2, 3, 4, 5];
let result = [];
let index = 0;
while(index < list.length){
  let number = list[index];
  let tail = result.length;
  result[tail] = addOne(number);
  index = index + 1;
}
console.log(list);
~~~

---

## 複雑な配列

~~~javascript
let records = [
  [1, 3, 5],
  [2, 4, 6, 8, 10, 12],
  [2, 3, 5, 7, 11, 13, 17, 19, 23]
];
let recordIndex = 0;
while(recordIndex < records.length){
  let record = records[index];
  let sum = 0;
  let index = 0;  
  while(index < record.length){
    sum = sum + record[index];
    index = index + 1;
  }
  console.log(`sum(records${recordIndex}) = ${sum}`);
  recordIndex = recordIndex + 1;
}
~~~

* 配列を配列の要素とできます
* 上記の例は、各要素の合計値を出力します

----

### 関数を使って簡単に

~~~javascript

function sum(list){
  let index = 0;  
  let sum = 0;
  while(index < record.length){
    sum = sum + record[index];
    index = index + 1;
  }
  return sum;
}

let records = [
  [1, 3, 5],
  [2, 4, 6, 8, 10, 12],
  [2, 3, 5, 7, 11, 13, 17, 19, 23]
];
let recordIndex = 0;
while(recordIndex < records.length){
  let record = records[index];
  let sum = sum(record);
  console.log(`sum(records${recordIndex}) = ${sum}`);
  recordIndex = recordIndex + 1;
}
~~~

---

## まとめ

* 論理演算：論理和、論理積、否定
* 繰り返し：条件と繰り返す処理
* 配列と繰り返し