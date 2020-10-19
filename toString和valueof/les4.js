//a===1&&a===2&&a===3 为 true
var obj = {
    set a(v) {
        this.__a = v
    },
    get a() {
        return ++this.__a
    }
}
obj.a = 0
console.log(obj.a === 1)
console.log(obj.a === 2)
console.log(obj.a === 3)

class A {
    constructor(value) {
        this.value = value
    }

    valueOf() {
        return this.value++
    }
}

var a = new A(1)
console.log(a == 1)
console.log(a == 2)
console.log(a == 3)

var o = {}
var v = 0
Object.defineProperty(o, 'a', {
    get() {
        return v++
    }
})
console.log(o.a)
console.log(o.a)
console.log(o.a)
console.log(o.a)