var points = [
  { x: 10, y: 20 },
  { x: 20, y: 30 },
  { x: 30, y: 40 },
  { x: 40, y: 50 },
  { x: 50, y: 60 },
];

points.findIndex(function matcher(point) {
  return point.x % 3 == 0 && point.y % 4 == 0;
}); // 2

points.findIndex(function matcher(point) {
  return point.x % 6 == 0 && point.y % 7 == 0;
}); // -1
