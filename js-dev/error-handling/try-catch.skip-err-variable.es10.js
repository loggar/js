const a = () => {
  try {
    JSON.parse(text);
    return true;
  } catch {
    return false;
  }
};

console.log(a());
