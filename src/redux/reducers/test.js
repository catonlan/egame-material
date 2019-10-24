
// redux的reducer,操作test信息

import {TEST_INCREASE, } from '../actions/test';
import merge from 'lodash/merge';
import myFun from '../../assets/js/myFun';

// 初始化状态
const initState = {
  hits: 0,
};

// reducer是一个计划函数，接收旧的 state 和 action，生成新的 state
export default function reducer(state = initState, action) {
  myFun.debuglog('test reducer:', action);
  const step = myFun.isInteger(action.data) ? action.data : 1;

  switch (action.type) {
  case TEST_INCREASE:
    return merge({}, state, {
      hits: (state.hits + step),
    });
  default:
    return state;
  }
}
