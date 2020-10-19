function Super(name) {
    this.name = name
    this.colors = ['red', 'yellow']
}

Super.prototype.sayName = function(){
    console.log(this.name)
}

function Sub(name, age){
    Super.call(this, name)
    this.age = age
}