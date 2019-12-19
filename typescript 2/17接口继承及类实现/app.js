"use strict";
// 接口: class中
var People = /** @class */ (function () {
    function People() {
        this.name = '米斯特吴';
        this.age = 31;
        this.salary = 8000;
        this.id = 101;
        this.course = 'it';
    }
    People.prototype.greet = function () {
        console.log('hello world');
    };
    return People;
}());
var employee = {
    name: '米斯特吴',
    age: 32,
    salary: 7000,
    sex: '男',
    work: '前端开发',
    greet: function () {
        console.log('hello');
    }
};
console.log(employee);
