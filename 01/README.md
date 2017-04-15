# 情報基礎 2

慶應義塾大学環境情報学部

清水智公 (chiko@tom.sfc.keio.ac.jp)

---

## 今日の内容

* 講義概要
* 開発環境の準備
* GitHubを使う練習

---

## この講義の目的

* 何かを作る経験をすること
* プログラムの基本的な構成要素について学ぶこと
* 問題の把握、分割、解決の方法を学ぶこと

---

##　採点

|成績|基準|
|---|---|
|S|90点以上|
|A|80点以上 |
|B|70点以上、80点未満 |
|C|60点以上、70点未満 |
|D|60点未満|

* 各要素を点数化し、100点満点で採点します
* 中間試験か、最終発表の放棄は採点不可となります

----

### 採点の要素

* 出席
* 中間試験（第8回に予定）
* 最終発表と成果物
* 日々の講義への貢献

----

### 出席について

* 毎回9:30にとります
* 成績に反映されます（上限あり、下限なし）
* ただし出席しているからといって、単位が来るわけではありません

----

### 休講と補講の予定

|日時|内容|メモ|
|---|---|---|
|2017/07/13|休講||
|2017/07/20|休講||
|2017/07/08|補講|2-5限の4コマ行います。最終発表日です|

----

## 担当教員：清水智公

<div style="display:flex"><img
 src="https://pbs.twimg.com/profile_images/1567578351/chikoski_handwritten_lightened.jpg"
 style="width: 25%;box-sizing: border-box;display: block;margin-right: 3rem;margin-top: 0;"
 alt="清水のtwitterアイコン">
<ul>
<li>しみずのりただ / [@chikoski](https://twitter.com/chikoski)</li>
<li>プログラミング言語、機械学習</li>
<li>サッカー、旅行、音楽、映画とマンガ</li>
</ul>
</div>

---

<iframe width="640" height="360" src="https://www.youtube.com/embed/lhlBWlhS7Vg?start=1220&amp;rel=0" frameborder="0" allowfullscreen></iframe>

----

<iframe width="640" height="360" src="https://www.youtube.com/embed/KUB-aJXquUA?start=1117&amp;rel=0" frameborder="0" allowfullscreen></iframe>

---

## 事前準備

* GitHubへのユーザ登録
* ソフトウェアのインストール

----

### ユーザ登録が必要なサービス

* [GitHubのユーザ登録](https://github.com/)
* [CNSのユーザ名との関連づけを行うフォーム](https://docs.google.com/forms/d/e/1FAIpQLSdU9vv5gtqH9YTdWe8PrqxCNP6a31zBnBOHDePrE_OotNuldQ/viewform?usp=sf_link)

----

### インストールするソフトウェア

* [Firefox](https://www.mozilla.org/firefox/)：開発に利用するWebブラウザ
* [Visual Studio Code](https://www.microsoft.com/ja-jp/dev/products/code-vs.aspx):
プログラムを入力するエディタ
* [node.js](https://nodejs.org/)：JavaScriptの処理系
* [GitHub Desktop](https://desktop.github.com/)：GitHubを操作するためのGUIツール

---

## GitHubとは

* ソフトウェア開発プロジェクト用のPaaS
* 代表的な機能
  * Gitを使ったバージョン管理
  * issueトラッキング
  * WiKi
  * Pull Request管理
  * [GitHub Pages](https://pages.github.com/)

----

### バージョン管理とは

* index.html
* index_new.html
* index (old).html
* index_20150920.html
* index_2015092001.html
* index.html（最新）
* index.html（ほんとの最新）

----

### バージョン管理とは（つづき）

* ファイルの変更履歴を管理すること
* 変更履歴：
    * いつ作ったか：ファイルの作成日時
    * いつ変更されたか：ファイルの変更日時
    * 何が変わったのか：ファイルの変更点
    * 誰が変えたのか：ファイルの変更者
* レポジトリ：データの保管場所

----

### GitHubを使うと防げること

* どのファイルが最新のものかわからなくなる
* 二人で同じファイルを編集してしまって、結合時に困る
* ファイルをうっかり消してしまう
* PCが壊れて、データが全てなくなってしまう　

---

## 練習問題1：GitHub Desktop のチュートリアルを実行しよう

![サイドバーにあるtutorialをクリックして、チュートリアルを始めてください](images/github-tutorial.png)

---

## 練習問題2：好きな動画を紹介しよう

1. [https://github.com/sfcjs/introduction](https://github.com/sfcjs/introduction) へアクセスします
2. "Fork"と書かれたボタンを押します
3. フォークしたレポジトリをクローンします
4. GitHubのユーザ名.mdというファイルに動画を紹介してください
5. "Send pull-request"というボタンを押してください