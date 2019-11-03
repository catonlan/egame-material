import React from 'react';
import {connect, } from 'react-redux';
import {Route, Switch, } from 'react-router-dom';
import myFun from './assets/js/myFun';
import Footer from './components/Footer';
import Bar from './components/Bar';
import Home from './page/Home';
import Games from './page/Games';
import Guess from './page/Guess';
import Information from './page/Information';
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
        {/*  定义路由页面组件 */}
        <Switch>
          <Route Component={Home}
            exact
            path="/"
          />
          <Route Component={Home}
            exact
            path="/home"
          />
          <Route Component={Games}
            exact
            path="/games"
          />
          <Route Component={Guess}
            exact
            path="/Guess"
          />
          <Route Component={Information}
            exact
            path="/information"
          />
        </Switch>
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
