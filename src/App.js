import React from 'react';
import {connect, } from 'react-redux';
import myFun from './assets/js/myFun';
import './styles/App.less';

class App extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div id="App">
        hello, react!
      </div>
    );
  }
}


// 将state 映射到props
const mapStateToProps = (state) => {
  myFun.debuglog(state);
  return {};
};

const mapDispatchToProps = (dispatch) => {
  myFun.debuglog(dispatch);
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
