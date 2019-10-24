// 把多个 reducer 函数合并成一个 reducer 函数
import {combineReducers, } from 'redux';
import { connectRouter, } from 'connected-react-router';
import test from './reducers/test';

export default (history) => combineReducers({
  router: connectRouter(history),
  test,
});
