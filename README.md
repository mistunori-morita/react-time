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
### src/全削除からのindex.jsを追加
- src/を一新して新しくindex.jsを作成
```js
import React from 'react';
import ReactDOM from 'react-dom';


ReactDOM.render(
  <div>CountDown champ</div>,document.getElementById('root')
);

これで表示されて入ればおk
```

## src/App.jsxを追加
- Componentを作成して表示
```js
import React, { Component }from 'react';

class App extends Component {
  render(){
    return (
      <div>Countdown champ, App Compmonent</div>
    )
  }
}

export default App;
```
```js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


ReactDOM.render(
  <App></App>, //この箇所をcomponentに書き換える
  document.getElementById('root')
);
※書き換えて表示がうまく行かない場合はビルドし直す（npm start）
```
