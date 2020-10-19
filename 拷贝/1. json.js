let obj = {
    name: 'muyiy',
    a: undefined,
    b: Symbol('muyiy'),
    c: function() {},
    d: null,
    e: new Date()
}
console.log(obj);
let b = JSON.parse(JSON.stringify(obj));
console.log(b)