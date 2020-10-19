var MyModules = (function Manager() {
    var modules = {}// 子模块列表
    /**
     * 核心函数：模块包装函数用于定义子模块以及传递子模块依赖
     * @param {*} name 子模块名称
     * @param {*} deps 子模块的依赖列表，用于将子模块导出去
     * @param {*} impl 子函数实现
     */
    function define(name, dependences, implement) {
        var obj = {}
        for (let i = 0; i < dependences.length; i++) {
            obj[dependences[i]] = modules[dependences[i]]// 依次将该模块需要的依赖其他模块导入进去
        }
        modules[name] = implement.call(implement, obj)// 将依赖模块通过参数传递给模块实现函数，从而实现在当前模块使用子模块
    }
    // 获取模块api
    function get(name) {
        return modules[name]
    }
    return {
        define,
        get,
        modules
    }
})()

MyModules.define('bar', [], function (require) {
    //此时require不包含任何子模块
    function hello(who) {
        return 'let me introduce: ' + who
    }
    return {
        hello
    }
})

MyModules.define('foo', ['bar'], function (require) {
    // 此时require包含子模块bar
    var hungry = 'hippo'
    function awesome() {
        console.log(require['bar'].hello(hungry || 'undefined').toUpperCase())
    }
    return { awesome }
})

MyModules.define('baz', ['bar', 'foo'], function (require) {
    // 此时require包含子模块bar和foo
    function sayHello() {
        console.log(require['bar'].hello('hello'))
    }
    function printAwesome() {
        require['foo'].awesome()
    }
    return { sayHello, printAwesome }
})

var bar = MyModules.get('bar')
var foo = MyModules.get('foo')
var baz = MyModules.get('baz')
console.log(bar.hello('hipper'))
// foo.awesome()
baz.sayHello()
baz.printAwesome()
