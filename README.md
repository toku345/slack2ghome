# slack2ghome

Slack botへのメッセージをGoogle Homeにしゃべらせよう

## Feature

- Slack RTM API を利用してメッセージ受信をおこなう
- 受信したメッセージを google-home-notifier を利用して、対象のGoogle Home に喋らせる

## Requirement

- Google Home
- Slack アカウント
- Node.jsが動くサーバー (※ Google Homeと同じLAN内で動作していること)

## Usage

### 手順1. Slack Bot用APIトークンを発行

[ここ](https://qiita.com/namutaka/items/233a83100c94af033575#bot-users-%E7%B0%A1%E6%98%93rtm-api%E5%88%A9%E7%94%A8)を参考にSlack App「Bot」を作成して、トークンを発行してください。

### 手順2. 喋らせたい Google Home のIPアドレスをしらべる

[ここ](https://www.kabegiwablog.com/entry/2018/03/14/090000)を参考にIPアドレスを確認してください。

### 手順3. スクリプト実行準備

喋らせたい Google Home と同一LAN内のPC・ラズパイなどの端末でで以下の操作をおこなう。

``` console
$ git clone https://github.com/toku345/slack2ghome.git
$ cd slack2ghome
$ npm install
```

### 手順4. 実行！

``` console
$ SLACK_TOKEN=<手順1で取得したSlackトークン> GHOME_IP=<手順2で取得したGoogleHomeのIPアドレス> ./app.js
```

### 手順5. Slackでbotに話しかける

手順1 で作成したBotにメンションをつけて話しかけると、Google Home がメッセージを読み上げてくれるよ！
