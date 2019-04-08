function apiConnect(apiKey) {
  function get(route) {
    return fetch(`${route}?key=${apiKey}`);
  }

  function post(route, params) {
    return fetch(route, {
      method: 'POST',
      body: JSON.stringify(params),
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    });
  }

  return {
    get,
    post
  };
}

const api = apiConnect('my-api-key');
// closure for apiKey created.

api.get('url');
api.post('url', {
  name: 'Lee'
});
