function add(first, second, ...remaining) {
  return first + second + remaining.reduce((acc, curr) => acc + curr, 0);
}
