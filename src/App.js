import React from 'react';
import {connect, } from 'react-redux';
import myFun from './assets/js/myFun';
import Footer from './components/Footer';
import Bar from './components/Bar';
import './styles/App.less';

class App extends React.Component {
  constructor(props) {
    super(props);
  }


  componentDidMount() {
    setTimeout(function () {
      const {IniToken, IniTokenTtl, IniNotice, } = window;

      myFun.debuglog('IniToken', IniToken, IniTokenTtl, IniNotice);
    });
  }

  render() {
    return (
      <div id="App">
        <Bar></Bar>
        <Footer></Footer>
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
