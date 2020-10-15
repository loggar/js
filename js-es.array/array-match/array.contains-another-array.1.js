let queue = {
  actions: ["email", "aws"],
  results: [
    {
      success: false,
      retryable: false,
      action: "aws",
    },
    {
      success: true,
      retryable: false,
      action: "email",
    },
  ],
};

let resultsActions = queue.results.map((d) => d.action);
console.log(queue.actions.every((i) => resultsActions.includes(i)));
