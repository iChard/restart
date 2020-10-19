
function cloneDeep1(source) {
    var target = {}
    for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
            if (typeof source[key] === 'object') {
                target[key] = cloneDeep1(source[key])// 递归
            } else {
                target[key] = source[key]
            }
        }
    }

    return target;
}

function isObject(obj) {
    return typeof obj === 'object' && obj != null
}


function cloneDeep2(source) {
    // 兼容数组
    if (!isObject(source)) return source;// 不是对象返回自身

    // var target = {}
    var target = Array.isArray(source) ? [] : {};// 兼容数组

    for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
            if (isObject(source[key])) {
                target[key] = cloneDeep2(source[key])// 递归
            } else {
                target[key] = source[key]
            }
        }
    }

    return target;
}

function cloneDeep3(source, hash = new WeakMap()) {

    if (!isObject(source)) return source;

    if (hash.has(source)) {
        return hash.get(source)
    }
    var target = Array.isArray(source) ? [] : {};// 兼容数组
    hash.set(source, target)

    for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
            if (isObject(source[key])) {
                target[key] = cloneDeep3(source[key], hash); // 新增代码，传入哈希表
            } else {
                target[key] = source[key];
            }
        }
    }

    return target;
}

function cloneDeep4(source, hash = new WeakMap()) {

    if (!isObject(source)) return source;

    // 循环引用
    if (hash.has(source)) {
        return hash.get(source)
    }

    // 兼容数组
    var target = Array.isArray(source) ? [] : {};// 兼容数组
    hash.set(source, target)

    // ========= 兼容Symbol为key的对象
    let symKeys = Object.getOwnPropertySymbols(source)
    if (symKeys.length) {
        symKeys.forEach(symKey => {
            if (isObject(source[symKey])) {
                // 核心代码：递归
                target[symKey] = cloneDeep4(source[symKey], hash)
            } else {
                target[symKey] = source[symKey]
            }
        })
    }
    // =========

    for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
            if (isObject(source[key])) {
                target[key] = cloneDeep3(source[key], hash); // 新增代码，传入哈希表
            } else {
                target[key] = source[key];
            }
        }
    }

    return target;
}

function cloneDeep4_2(source, hash = new WeakMap()) {

    if (!isObject(source)) return source;
    if (hash.has(source)) return hash.get(source);

    let target = Array.isArray(source) ? [] : {};
    hash.set(source, target);

    // 可以遍历所有类型key值
    Reflect.ownKeys(source).forEach(key => { // 改动
        if (isObject(source[key])) {
            target[key] = cloneDeep4_2(source[key], hash);
        } else {
            target[key] = source[key];
        }
    });
    return target;
}

var a = {
    name: "muyiy",
    book: {
        title: "You Don't Know JS",
        price: "45"
    },
    arr: [1, 2, 3],
    a1: undefined,
    a2: null,
    a3: 123,
    sym: Symbol(1),
    fun: function () {
        console.log('foo')
    }
}
var symKey = Symbol('sym')
// a.circleRef = a;
a[symKey] = 'symkey'
var b = cloneDeep1(a);

a.name = "高级前端进阶";
a.book.price = "55";
// console.log(b);
// console.log(JSON.parse(JSON.stringify(a)))

function createData(deep, breadth) {
    var data = {}
    var temp = data

    for (var i = 0; i < deep; i++) {
        temp = temp['data'] = {}
        for (var j = 0; j < breadth; j++) {
            temp[j] = j
        }
    }

    return data
}

// cloneDeep4(createData(10000))// 爆栈
// cloneDeep4(createData(10, 10000))


function cloneLoop(source) {
    const root = {}

    const loopList = [
        {
            parent: root,
            key: undefined,
            data: source
        }
    ]

    while (loopList.length) {
        const node = loopList.pop()
        const parent = node.parent
        const key = node.key
        const data = node.data

        let res = parent
        if (typeof key !== 'undefined') {
            res = parent[key] = {}
        }

        for (let key in data) {
            if (data.hasOwnProperty(key)) {
                if (typeof data[key] === 'object') {
                    loopList.push({
                        parent: res,
                        key: key,
                        data: data[key]
                    })
                } else {
                    res[key] = data[key]
                }
            }
        }
    }

    return root;
}

let source = {
    a1: 1,
    b1: {
        a2: 2,
        b2: {
            a3: 3
        }
    }
}
console.log(cloneLoop(source))