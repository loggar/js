const allowedUpdates = ["email", "pwd", "name", "mobile"];
const req = {
  body: {
    email: "a",
    age: 40,
  },
};

const updates = Object.keys(req.body);

const isAllowedToUpdate = updates.every((update) =>
  allowedUpdates.includes(update)
);

if (!isAllowedToUpdate) {
  console.log("Invalid update key");
}
