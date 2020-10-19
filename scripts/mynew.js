function _new(fun, ...params) {
    var obj = Object.create(null)
    Object.setPrototypeOf(obj, fun.prototype)
    var res = fun.call(obj, ...params)

    var resIsObj = typeof res === 'object' && res != null;
    var resiIsFun = typeof res === 'function'
    return resIsObj || resiIsFun ? res : obj
}

function Foo(name, age) {
    this.name = name
    this.age = age
}

Foo.prototype.sayName = function() {
    console.log(this.name)
}

var foo1 = _new(Foo, 'bai', 12)
console.log(foo1)
foo1.sayName()

var foo2 = new Foo('foo2', 13)
console.log(foo2)
foo2.sayName()

/**
 * 
 */