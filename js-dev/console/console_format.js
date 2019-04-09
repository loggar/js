console.log('my %s has %d years', 'dog', 15);
console.log('my %s has %i years', 'cat', 15);

console.log('floating point number example : %f', Math.PI);

const obj = {
  facebook: false,
  linkedin: true,
  flickr: false,
  instagram: false,
  stackoverflow: true,
  github: true,
  mozillar: true,
  hackernoon: true,
  freecodecamp: true,
  nested: {
    name: 'me',
    addr: 'addr'
  }
};

console.log(obj);
console.dir(obj);
console.log(JSON.stringify(obj, ' '));
console.log('site interesting : %O', obj);
console.log('site interesting : %j', obj);

if (typeof window !== 'undefined') {
  console.log('%o, %O', document.body, document.body);

  console.log(
    '%c My %s has %d years',
    'color: yellow; background:black; font-size: 16pt',
    'cat',
    2
  );

  console.log([1, 2]);
  console.dir([1, 2]);
}
