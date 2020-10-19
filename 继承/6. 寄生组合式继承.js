/**
 * 继承父级的原型链
 * @param {*} Sub 子级
 * @param {*} Super  父级
 */
function interitPrototype(Sub, Super) {
    var prototype = Object.create(Super.prototype)// 1. 定义一个对象prototype，将这个对象的原型[__proto__]指向Super.prototype
    prototype.constructor = Sub                   // 2. 将这个对象的构造函数[constructor]指向Sub
    Sub.prototype = prototype                     // 3. 将Sub的原型[prototype]指向上面的对象
}

function Super(name) {
    this.name = name
    this.colors = ['red', 'yellow']
}

Super.prototype.sayName = function(){
    console.log(this.name)
}

function Sub(name, age){
    // 调用一次构造函数：将父级的实例属性绑定到Sub中
    Super.call(this, name)
    this.age = age
}

interitPrototype(Sub, Super)

Sub.prototype.sayAge = function() {
    console.log(this.age)
}

var sub1 = new Sub('xyz', 14)
console.log(sub1)
var sub2 = new Sub('abc', 15)