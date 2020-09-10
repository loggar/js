const fetchMovies = async () => {
  const response = await fetch("/api/movies");
  const movies = await response.json();
  return movies;
};

fetchMovies().then((movies) => {
  // Movies fetched
});
