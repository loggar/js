function handle(req, res) {
  const name = req.body.name;
  const description = req.body.description;
  const url = req.url;

  console.log("url endpoint", url);

  // lots of logic happening
  dbService.createPerson(name, description);
}

// object destructuring
function handle(req, res) {
  const {
    body: { name, description },
    url,
  } = req;

  console.log("url endpoint", url);

  // lots of logic happening
  dbService.createPerson(name, description);
}
