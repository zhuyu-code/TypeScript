type SumValue = { money: number; count: (val: number) => void };

let sumValue: SumValue = {
  money: 200,
  count(value: number): void {
    this.money += value;
  }
};

let handleCount: {
  name: string;
  sumValue: SumValue;
  friends: string[];
} = {
  name: 'Henry',
  sumValue: sumValue,
  friends: ['bucky', 'elyse']
};

handleCount.sumValue.count(500);
console.log(handleCount);

// 如果可以, 暂停视频自己尝试做一下
