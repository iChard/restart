
function object(obj) {
    function F() { }
    F.prototype = obj;
    return new F();
}

function createAnther(original) {
    var clone = object(original)
    // 主动丰富子对象的属性
    clone.sayHi = function() {
        console.log('hi')
    }
    return clone;
}
var person = {
    name: "Nicholas",
    friends: ["Shelby", "Court", "Van"],
    sayName() {
        console.log(this.name)
    },
    sayFriends() {
        console.log(this.friends)
    },
    arrowFoo: () => {
        console.log(this)
    }
};

var person1 = createAnther(person)
person1.name = 'Daogulas'
person1.friends.push('bob')

var person2 = createAnther(person)
person2.name = 'Avala'
person2.friends.push('Adola')
person2.sayName()
person2.sayFriends()




