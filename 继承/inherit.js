function Bar(name) {
    this.name = 'bar'
}

Bar.prototype.sayName = function () {
    console.log(this.name)
}

function Foo(age) {
    this.age = age
}
var bar = new Bar()
Foo.prototype = Object.create(Bar.prototype, { name: { value: 'hah' } })// 使用Object.create
// Foo.prototype = bar// 原型链实例
Foo.prototype.sayAge = function () {
    console.log(this.age)
}
var foo = new Foo(13)
foo.sayName()
foo.sayAge()
// bar.sayAge()// error
// console.log(Object.create(null))
console.log(bar.hasOwnProperty('sayAge'))