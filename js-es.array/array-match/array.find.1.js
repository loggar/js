var a = [1, 2, 3, 4, 5];

a.find(function matcher(v) {
  return v == "2";
}); // 2

a.find(function matcher(v) {
  return v == 7; // undefined
});

var points = [
  { x: 10, y: 20 },
  { x: 20, y: 30 },
  { x: 30, y: 40 },
  { x: 40, y: 50 },
  { x: 50, y: 60 }
];

points.find(function matcher(point) {
  return point.x % 3 == 0 && point.y % 4 == 0;
});
