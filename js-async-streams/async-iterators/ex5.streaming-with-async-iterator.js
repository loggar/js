async function getResponseSize(url) {
  const response = await fetch(url);
  let total = 0;

  for await (const chunk of response.body) {
    total += chunk.length;
  }
  return total;
}
