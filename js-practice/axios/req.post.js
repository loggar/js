const postPosts = () => {
  axios
    .post("https://jsonplaceholder.typicode.com/posts", {
      title: "Fred",
      body: "Fred is awesome"
    })
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.error(error);
    });
};
postPosts();
