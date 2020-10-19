var a = 1;
var _a = '1'
var b = 'hello';
var c = true;
var d = { a: 'a' };
var e = [1, 2, 3]
var f = function () { console.log(1) }
var g = /\./
var h = Symbol()
var i = null
var j = undefined
// 展示
console.log(a.toString())
console.log(b.toString())
console.log(c.toString())
console.log(d.toString())
console.log(e.toString())
console.log(f.toString())
console.log(g.toString())
console.log(h.toString())
// console.log(i.toString())// Connot read property 'toString' of null
// console.log(j.toString())// Connot read property 'toString' of undefined

console.log(a.valueOf())
console.log(b.valueOf())
console.log(c.valueOf())
console.log(d.valueOf())
console.log(e.valueOf())
console.log(f.valueOf())
console.log(g.valueOf())
console.log(h.valueOf())
// console.log(i.valueOf())// Connot read property 'valueOf' of null
// console.log(j.valueOf())// Connot read property 'valueOf' of undefined
// 计算
console.log(a+3)
console.log(_a+3)
console.log(b+b)
console.log(c+c)//布尔值和null、undefined在进行计算时会尝试转换成数值； 再不重写toString和valueOf的情况下：其他对象、数组、字符串、函数、正则、都会尝试取变量的toString使用字符串计算
console.log(d+d)
console.log(d.valueOf()+1)
console.log(e+e)
console.log(e.valueOf()+1)
console.log(f+1)
console.log(f.valueOf()+1)
console.log(g+g)
console.log(g.valueOf()+1)
// console.log(h+h)
console.log(i+i)
console.log(+j)

console.log('2,3' > 1)
console.log(a+2)
console.log(2+_a)
var arr1 = [{a: 1}, [2,3]]
console.log(arr1.toString())

