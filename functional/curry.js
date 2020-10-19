// 减少函数参数的过程叫做柯里化，
function sum(a, b) {
    return a + b
}
/**
 * 实现柯里化
 * @param {*} fn 原函数
 * @param {*} args 用于记录函数参数，等到参数长度等于原函数参数长度时即可
 */
function createCurry(fn, args) {
    let len = fn.length;//2
    let argsArr = args || []//[]
    return function () {
        let params = Array.prototype.slice.call(arguments)
        argsArr.push(...params)
        if (argsArr.length < len) {
            return createCurry(fn, argsArr)
        }
        return fn(...argsArr)
    }
}
function batchSum() {
    // let arr = 
}
// var add = createCurry(sum)
// console.log(sum(1, 2))
// console.log(add(1))
console.log([1,2,3].reduce((a, b) => a+b, 0))

function add() {
    var args = Array.prototype.slice.call(arguments)
    var fn =  function() {
        var allArgs = args.concat([...arguments])
        return add(...allArgs)
    }
    fn.toString = function () {
        return args.reduce((c, a) => c + a, 0)
    }
    return fn
}
console.log(+add(1))
console.log(add(1, 2))
console.log(+add(1)(2)(3)(4))
