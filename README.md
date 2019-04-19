# About

自動でエアコンの On/Off するやつ

* 一定間隔ラズパイで温度を取って DB に突っ込む & 赤外線センサを操作するREST APIの作成
* DB のデータを得る REST API の作成 & 赤外線センサ用 REST API を叩く REST API の作成 (Web Backend)
* ブラウザから温湿度のグラフ、On/Off のボタン表示 (Web Frontend)
    * ここ
* 温湿度情報を出力する Slack Bot

---

# pi-temperature-front

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
