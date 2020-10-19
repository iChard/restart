// 当涉及到计算时优先取valueOf   其次再是toString
class A {
    valueOf() {
        return 2;
    }
    toString() {
        return '哈哈哈';
    }
}
// Object.prototype.toString = null
var a1 = new A()
console.log(a1)
console.log(String(a1))
console.log(Number(a1))
console.log(a1 + '吼')
console.log(a1 + 1)
console.log(a1 - 2)
console.log(a1 * 2)
console.log(a1 / 2)
console.log(a1 == '哈哈哈')


class B {
    valueOf() {
        return '_2'
    }
    toString() {
        return '哈哈哈';
    }
}

var b = new B()
console.log(String(b))
console.log(Number(b))
console.log(b + 1)
console.log('a'+b + '哈')
console.log(b == '_2')

