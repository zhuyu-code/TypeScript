"use strict";
var sumValue = {
    money: 200,
    count: function (value) {
        this.money += value;
    }
};
var handleCount = {
    name: 'Henry',
    sumValue: sumValue,
    friends: ['bucky', 'elyse']
};
handleCount.sumValue.count(500);
console.log(handleCount);
// 如果可以, 暂停视频自己尝试做一下
