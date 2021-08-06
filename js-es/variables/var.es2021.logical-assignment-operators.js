//"Or Or Equals"
x ||= y;
x || (x = y);

// "And And Equals"
x &&= y;
x && (x = y);

// "QQ Equals"
x ??= y;
x ?? (x = y);

const updateID = (user) => {
  // We can do this
  if (!user.id) user.id = 1;

  // Or this
  user.id = user.id || 1;

  // Or use logical assignment operator.
  user.id ||= 1;
};

function setOpts(opts) {
  opts.cat ??= "meow";
  opts.dog ??= "bow";
}

setOpts({ cat: "meow" });
