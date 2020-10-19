// 原理：通过将子函数的原型指向父函数的实例
// 父级
function SuperType(name) {
    this.name = name;
    this.colors = ["red", "blue", "green"];
}

SuperType.prototype.sayName = function () {
    console.log(this.name);
};

// 子集
function SubType(name, age) {
    this.age = age;
}
// 将子构造函数的prototype指向父构造函数的实例化
SubType.prototype = new SuperType()