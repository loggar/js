async function getResponseSize(url) {
  const response = await fetch(url);
  const reader = response.body.getReader();
  let total = 0;

  while (true) {
    const { done, value } = await reader.read();
    if (done) return total;
    total += value.length;
  }
}
