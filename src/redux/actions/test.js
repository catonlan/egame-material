// redux的action,操作test信息

const TEST_INCREASE = 'test/INCREASE';

/**
 * 测试递增
 * @param {int} step 步长,每次加多少
 */
const testIncrease = function (step = 1) {
  return {
    type: TEST_INCREASE,
    data: step,
  };
};

export {
  TEST_INCREASE,
  testIncrease,
};
