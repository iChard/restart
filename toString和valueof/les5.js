function add(a) {
    function sum(b) {
        a = b ? a + b : a
        return sum
    }
    sum.valueOf = function () {
        return a
    }
    return sum
}

console.log(+add(1))
console.log(+add(1)(2))