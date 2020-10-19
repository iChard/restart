function createObject(proto) {
    function F(){}
    F.prototype = proto
    let f = new F()
    console.log(Object.getPrototypeOf(f) === proto)
    return f
}
var targetObj = {
    name: 'father'
}
var myobj = createObject(targetObj)

function createObject1(proto) {
    var obj = {}
    Object.setPrototypeOf(obj, proto)
    return obj;
}

var myobj1 = createObject1(targetObj)
console.log(myobj.name)
console.log(myobj.name)