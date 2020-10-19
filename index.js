function test() {
    try {
        console.log(1)
        return 'try'
    } catch (e) {
        console.log(2)
        return 'catch'
    } finally {
        console.log(3)
        return 'finally'
    }
}

console.log(test())