const createProxy = subject => ({
  hello: () => `${subject.hello()} world!`,
  goodbye: () => subject.goodbye.apply(subject, arguments)
});

const proxy = createProxy({
  hello: () => "Hello foo",
  goodbye: () => "Goodbye foo"
});

console.log(proxy.hello());
console.log(proxy.goodbye());
