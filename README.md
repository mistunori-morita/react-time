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


### index.js修正
```js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


ReactDOM.render(
  <App/>,
  document.getElementById('root')
);

最初は<App></App>でも表示できるということを知るための設定
実際にはこちらを使う
```

### App.jsxを作り込む
```js
import React, { Component }from 'react';

class App extends Component {
  render(){
    return (
      <div>
        <div>CountDown to December 25, 2017</div>
        <div>
          <div>14 Days</div>
          <div>30 hours</div>
          <div>15 mintes</div>
          <div>20 seconds</div>
        </div>
        <div>
          <input placeholder="new data"/>
          <button>submit</button>
        </div>
      </div>
    )
  }
}

export default App;

```

- src/App.cssを作成
```css
.App{
  text-align: center;
  font-style: 35px;
  margin-top: 20%;
}

```
- 作成したApp.cssをimportする
```js

import React, { Component }from 'react';
import './App.css'; //ここでimport

class App extends Component {
  render(){
    return (
      <div className="App"> //classNameを使って適用させる
        <div>CountDown to December 25, 2017</div>
        <div>
          <div>14 Days</div>
          <div>30 hours</div>
          <div>15 mintes</div>
          <div>20 seconds</div>
        </div>
        <div>
          <input placeholder="new data"/>
          <button>submit</button>
        </div>
      </div>
    )
  }
}

export default App;
```
- styleの追加
```css
.App{
  text-align: center;
  font-size: 35px;
  margin-top: 20%;
}

.App-title{
  font-size: 50px;
}

.Clock-days, .Clock-hours, .Clock-minutes, .Clock-seconds{
  display: inline;
  margin: 10px;
}

```

- App.jsxの追記
```js
import React, { Component }from 'react';
import './App.css';

class App extends Component {
  render(){
    return (
      <div className="App">
        <div>CountDown to December 25, 2017</div>
        <div className="App-title">
          <div className="Clock-days">14 Days</div>
          <div className="Clock-hours">30 hours</div>
          <div className="Clock-minutes">15 minutes</div>
          <div className="Clock-seconds">20 seconds</div>
        </div>
        <div>
          <input placeholder="new data"/>
          <button>submit</button>
        </div>
      </div>
    )
  }
}

export default App;

```

### stateについて
- stateについて理解する
```js

class App extends Component {
  //constructorで書いていく
  constructor(props){
    super(props);
    this.state = {
      dedline: 'December 25, 2017'　//状態
    }
  }

  render(){
    return (
      <div className="App">
                          //ここで埋め込むことで「December 25, 2017」が表示される
        <div>CountDown to {this.state.dedline}</div>
        <div className="App-title">
          <div className="Clock-days">14 Days</div>
          <div className="Clock-hours">30 hours</div>
          <div className="Clock-minutes">15 minutes</div>
          <div className="Clock-seconds">20 seconds</div>
        </div>
        <div>
          <input placeholder="new data"/>
          <button>submit</button>
        </div>
      </div>
    )
  }
}

export default App;

```

### stateの更新
- setStateについて理解する

```js


class App extends Component {
  //constructorで書いていく
  constructor(props){
    super(props);
    this.state = {
      dedline: 'December 25, 2017'　//状態
    }
  }

  //関数を作成　setStateが更新に必要なもの（constrctorで宣言している必要がある）
  changeDEadline() {
    this.setState({
      dedline: 'November 25, 2017'
    })
  }

  render(){
    return (
      <div className="App">
                          //ここで埋め込むことで「December 25, 2017」が表示される
        <div>CountDown to {this.state.dedline}</div>
        <div className="App-title">
          <div className="Clock-days">14 Days</div>
          <div className="Clock-hours">30 hours</div>
          <div className="Clock-minutes">15 minutes</div>
          <div className="Clock-seconds">20 seconds</div>
        </div>
        <div>
          <input placeholder="new data"/>
          //onClickを設定して、this.changeDEadline()で実行させる
          <button onClick={() => this.changeDEadline()}>submit</button>
        </div>
      </div>
    )
  }
}

export default App;

```
### onChangeについて
- `onChange={event => console.log('event', event.target.value)}`を使うとコンソールがみれる
-　これをもとにonChangeイベントでstateを更新

```js

constructor(props){
  super(props);
  this.state = {
    dedline: 'December 25, 2017',
    newDedline: '' //追記
  }
}

//この状態でまずみると、consoleに変化したstateを表示させれる
changeDEadline() {
  console.log('state', this.state);
}

//jsx
<div>
  <input placeholder="new data" onChange={event => this.setState({newDedline: event.target.value})}/>
  <button onClick={() => this.changeDEadline()}>submit</button>
</div>

```

```js
//changeDEadline()を修正
changeDEadline() {
  console.log('state', this.state);

  //新しくsetStateで更新する値を決める,コンソールでみたように、newDedlineには入力したものが入ってくるのでそれをdedlineの”キー”＋"値"としてthis.state.newDedlineにすると状態が更新される
  this.setState({
    dedline: this.state.newDedline
  });
}

```

### timeComponentの作成
- App.jsxの修正
- Clock.jsxの作成

```js
//App.jsx

import React, { Component }from 'react';
import './App.css';
import Clock from './Clock'; //作成したClock.jsxコンポーネントを読み込み

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      dedline: 'December 25, 2017',
      newDedline: ''
    }
  }

  changeDEadline() {
    console.log('state', this.state);
    this.setState({
      dedline: this.state.newDedline
    });
  }



  render(){
    return (
      <div className="App">
        <div>CountDown to {this.state.dedline}</div>
        <Clock /> //ここにコンポーネントを読み込み
        <div>
          <input placeholder="new data" onChange={event => this.setState({newDedline: event.target.value})}/>
          <button onClick={() => this.changeDEadline()}>submit</button>
        </div>
      </div>
    )
  }
}

export default App;


```

```js
//Clock.jsx

import React, { Component } from 'react';
import './App.css';


class Clock extends Component {
  //最初に必要な状態(state)を準備しておく
  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    }
  }

  render() {
    return (
      <div>
      //this.state.xxx（constrctorで設定したstateにアクセスして初期値を表示させれる）
        <div className="Clock-days">{this.state.days} Days</div>
        <div className="Clock-hours">{this.state.hours}  hours</div>
        <div className="Clock-minutes">{this.state.minutes}  minutes</div>
        <div className="Clock-seconds">{this.state.seconds}  seconds</div>
      </div>
    )
  }
}


export default Clock;


```

### propsについて
- 親コンポーネントからpropsを渡す

```js

<Clock
  dedline={this.state.dedline}/>


//Clock.jsx
constructor(props) {
  super(props);
  this.state = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  }
  //これで見るとthis.propsの中身がみれる
  console.log('this.props', this.props)
}


```

### Dateを使って時間を取得
- getTimeUntilの関数を使ってsetStateをする
```js
getTimeUntil(dedline) {
  //timeの変数に時間を代入※このままだと数字がただでるだけなので次で変換する
  const time = Date.parse(dedline) - Date.parse(new Date());
  console.log('time',time);

  //書く時間をMath.floorを使って変換
  const seconds = Math.floor((time/1000)% 60);
  const minutes = Math.floor((time/1000/60)%60);
  const hours = Math.floor(time/(1000*60*60) % 24);
  const days = Math.floor(time/(1000*60*60*24));

  //書く時間が取得できているかコンソールで表示　constrctorで状態をセットしたので、その中にconstで宣言した各値を代入している
  console.log('seconds',seconds,'minutes',minutes,'hours', hours,'days',days);

  //この状態だとsetStateで無限ループになるので落ちるので次で修正
  this.setState({
    days: days
  });
}

render() {
  //関数の呼び出し
  this.getTimeUntil(this.props.dedline)
  return (
    <div>
      <div className="Clock-days">{this.state.days} Days</div>
      <div className="Clock-hours">{this.state.hours}  hours</div>
      <div className="Clock-minutes">{this.state.minutes}  minutes</div>
      <div className="Clock-seconds">{this.state.seconds}  seconds</div>
    </div>
  )
}

```

### ライフサイクルを理解する
- 無限ループの部分をライフサイクルを利用して修正
```js
class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    }
  }

  componentWillMount() {
    this.getTimeUntil(this.props.dedline);
  }

  componentDidMount() {
    setInterval(() => this.getTimeUntil(this.props.dedline), 1000)
  }

  getTimeUntil(dedline) {
    const time = Date.parse(dedline) - Date.parse(new Date());
    console.log('time',time);

    const seconds = Math.floor((time/1000)% 60);
    const minutes = Math.floor((time/1000/60)%60);
    const hours = Math.floor(time/(1000*60*60) % 24);
    const days = Math.floor(time/(1000*60*60*24));

    console.log('seconds',seconds,'minutes',minutes,'hours', hours,'days',days);
    //省略形でsetStateをして更新できるようにする
    this.setState({
      days, hours, minutes, seconds
    });
  }

  render() {
    return (
      <div>
        <div className="Clock-days">{this.state.days} Days</div>
        <div className="Clock-hours">{this.state.hours}  hours</div>
        <div className="Clock-minutes">{this.state.minutes}  minutes</div>
        <div className="Clock-seconds">{this.state.seconds}  seconds</div>
      </div>
    )
  }
}

```
