Number.prototype.valueOf = function () {
    return 4;
}
Number.prototype.toString = function () {
    return 5;
}
var a = 2;
console.log(a.valueOf())
console.log(a.toString())

// Object
console.log(global.a)
console.log(a)
console.log(a + 1)
