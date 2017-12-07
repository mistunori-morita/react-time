# react-countDownChamp
## reactの最初の設定
- `npm install -g create-react-app`をグローバルにインストール
- ※エラーがでたら最初に`sudo`をつけて行う
- create-react-app xxxx //xxxがアプリケーション名になる ※大文字だめになったぽい命名時

## 標準のポート
- 通常何もしないと`localhost:3000`になってしまう
- 変更したい場合はpackage.jsonを編集する必要がある
```js
{
  "name": "countdownchamp",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "react": "^16.2.0",
    "react-dom": "^16.2.0",
    "react-scripts": "1.0.17"
  },
  "scripts": {
    "start": "PORT=3006 react-scripts start", //この部分をそのまま変更
    "build": "react-scripts build",
    "test": "react-scripts test --env=jsdom",
    "eject": "react-scripts eject"
  }
}

```
