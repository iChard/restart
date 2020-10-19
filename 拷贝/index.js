let a = {
    name: "advanced",
    age: 18
}
let b = {
    name: "muyiy",
    book: {
        title: "You Don't Know JS",
        price: "45"
    }
}
let c = Object.assign(a, b);
console.log(c);
console.log(a === c)

b.name = "change";
b.book.price = "55";

console.log(b)

console.log(a)

// 手动实现Object.assign
if (typeof Object.assign2 != 'function') {
    Object.defineProperty(Object, 'assign2', {
        value: function (target, o) {
            'use strict';
            if (target == null) {
                throw new TypeError('cannot convert unfinded or null to object')
            }
            var to = Object(target)

            for (var index = 1; index < arguments.length; index++) {
                var nextSource = arguments[index]

                if (nextSource !== null) {
                    for (var nextKey in nextSource) {
                        if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {// 不能使用nextSource.hasOwnProperty的原因是可能这个对象没有hasOwnProperty属性，（使用Object.create(null)会创建一个0关联的空对象）
                            to[nextKey] = nextSource[nextKey]
                        }
                    }
                }
            }

            return to
        },
        writable: true,
        configurable: true,
        enumerable: false,// 默认为false
    })
}

var obj1 = {
    a: 1
}
var obj2 = {
    b: 2
}

Object.assign2(obj1, obj2)
console.log(obj1)

// 木易杨
var anotherObject = {
    a: 1
};

// 创建一个关联到 anotherObject 的对象
var myObject = Object.create(anotherObject);
myObject.b = 2;

console.log("a" in myObject); // true
console.log("b" in myObject); // true
// myObject.
console.log(myObject.hasOwnProperty('a'))
console.log(myObject.hasOwnProperty('b'))