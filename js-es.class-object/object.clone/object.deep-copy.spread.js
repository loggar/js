const obj = {
  name: "a",
  age: 40,
  email: {
    primary: "abc",
    secondary: "def",
  },
};

const cloned = {
  ...obj,
  email: {
    ...obj.email,
    secondary: "hij",
  },
};
