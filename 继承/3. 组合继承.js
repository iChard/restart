function Super(name) {
    this.name = name
    this.colors = ['red', 'yellow']
}

Super.prototype.sayName = function(){
    console.log(this.name)
}

function Sub(name, age){
    // 第二次调用Super：将Super的实例属性添加到Sub的实例中
    Super.call(this, name)
    this.age = age
}

// 第一次调用Super：将Super的实例属性添加到Sub的原型链上
Sub.prototype = new Super()