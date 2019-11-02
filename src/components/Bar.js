import React from 'react';
import { NavBar, } from 'antd-mobile';
import Avatar from '../assets/image/avatar.png';
import Logo from '../assets/image/logo.png';


class Bar extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (

      <NavBar
        leftContent={<img className="logo"
          src={Logo}
        />}
        mode="dark"
        rightContent={<div className="avatar-bar"><img className="avatar"
          src={Avatar}
        />
        <span>登录</span></div>}
      ></NavBar>
    );
  }
}


export default Bar;
