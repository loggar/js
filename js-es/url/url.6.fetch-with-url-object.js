const url = new URL("https://reqres.in/api/users");

fetch(url)
  .then(res => res.json())
  .then(res => {
    res.data.map(user => {
      console.log(`${user.id}: ${user.first_name} ${user.last_name}`);
    });
  });
