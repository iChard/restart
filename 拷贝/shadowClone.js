function cloneShallow(source) {
    var target = {}

    for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key]
        }
    }

    return target;
}

function isObject(obj) {
    return typeof obj === 'object' && obj != null
}

function cloneDeep1(source) {
    if (!isObject(source)) return source;// 不是对象返回自身

    // var target = {}
    var target = Array.isArray(source) ? [] : {};// 兼容数组

    for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
            if (isObject(source[key])) {
                target[key] = cloneDeep1(source[key])// 递归
            } else {
                target[key] = source[key]
            }
        }
    }

    return target;
}

var a = {
    name: "muyiy",
    book: {
        title: "You Don't Know JS",
        price: "45"
    },
    arr: [1,2,3],
    a1: undefined,
    a2: null,
    a3: 123
}
var b = cloneDeep1(a);

a.name = "高级前端进阶";
a.book.price = "55";
console.log(b);