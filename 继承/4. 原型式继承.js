
function object(obj) {
    function F() { }
    F.prototype = obj;
    return new F();
}
var person = {
    name: "Nicholas",
    friends: ["Shelby", "Court", "Van"],
    sayName() {
        console.log(this.name)
    },
    sayFriends() {
        console.log(this.friends)
    }
};

var person1 = object(person)
person1.name = 'Daogulas'
person1.friends.push('bob')

var person2 = object(person)
person2.name = 'Avala'
person2.friends.push('Adola')
person2.sayName()
person2.sayFriends()// ["Shelby", "Court", "Van", "bob" , "Adola"]
person2.arrowFoo()
