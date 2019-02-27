import React, { Component } from 'react';

import { Button } from './lib';
// import 'antd/dist/antd.css'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <AntdButton type="primary">Button</AntdButton> */}
        <Button color={'red'} size={'large'}>ss</Button>
      </div>
    );
  }
}

export default App;
