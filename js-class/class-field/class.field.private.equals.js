class Point {
  #x;
  #y;

  constructor(x, y) {
    this.#x = x;
    this.#y = y;
  }
  equals(otherPoint) {
    return this.#x === otherPoint.#x && this.#y === otherPoint.#y;
  }
}

const point1 = new Point(1, 2);
const point2 = new Point(2, 3);
const point3 = new Point(1, 2);

point1.equals(point2);
//false
point1.equals(point3);
//true
