function Foo(name) {
    this.name = name
}


Foo.prototype.getName = function() {
    return this.name
}

function Bar(name, label) {
    Foo.call(this, name)
    this.label = label
}

Bar.prototype = Object.create(Foo.prototype)
console.log(Bar.prototype.constructor)
Bar.prototype.mylabel = function() {
    return this.label
}
var foo = new Foo('ma')
var bar = new Bar('bar', 'hello')
console.log(bar.getName())
console.log(bar.mylabel())
console.log(bar.constructor)
// console.log(Object.getOwnPropertyDescriptors(Foo))
var _foo = Object.create(foo)
console.log(Object.getPrototypeOf(foo).constructor)
console.log(foo.constructor)

function isRelateTo(o1, o2) {
    function F(){}
    F.prototype = o2
    return o1 instanceof F
}

var a = {}
var b = Object.create(a)
console.log(isRelateTo(b, a))
console.log(Foo.prototype.isPrototypeOf(foo))
console.log(a.isPrototypeOf(b))
console.log(Object.getOwnPropertyDescriptors(foo).__proto__)

// 实现__proto__122
Object.defineProperty(Object.prototype, '__proto__', {
    get: function() {
        return Object.getPrototypeOf(this)
    },
    set: function(o) {
        Object.setPrototypeOf(this, o)
        return o;
    }
})

