class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static distance(a, b) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;

        return Math.hypot(dx, dy);
    }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);

let point = new Point(2, 3)
console.log(Point.distance(p1, p2));

class Rectangle {
    #height = 0;
    #width;
    _height = 10;
    constructor(height, width) {
        this.#height = height;
        this.#width = width;
    }

    static getParams() {
        console.log(object)
    }
}

