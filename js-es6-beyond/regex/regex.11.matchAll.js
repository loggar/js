const string = 'black*raven lime*parrot white*seagull';
const regex = /(?<color>.*?)\*(?<bird>[a-z0-9]+)/;
for (const match of string.matchAll(regex)) {
  let value = match[0];
  let index = match.index;
  let input = match.input;
  console.log(`${value} at ${index} with '${input}'`);
  console.log(match.groups.color);
  console.log(match.groups.bird);
}
