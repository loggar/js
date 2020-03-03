testScheduler.run(({ hot, expectObservable }) => {
  const source = hot("--a--a--a--a--a--a--a--");
  const sub1 = "      --^-----------!";
  const sub2 = "      ---------^--------!";
  const expect1 = "   --a--a--a--a--";
  const expect2 = "   -----------a--a--a-";
  expectObservable(source, sub1).toBe(expect1);
  expectObservable(source, sub2).toBe(expect2);
});

/*
'-' time: 1 frame time passing.
[0-9]+[ms|s|m] time progression: the time progression syntax lets you progress virtual time by a specific amount. It's a number, followed by a time unit of ms (milliseconds), s (seconds), or m (minutes) without any space between them, e.g. a 10ms b. See Time progression syntax for more details.
'^' subscription point: shows the point in time at which a subscription happen.
'!' unsubscription point: shows the point in time at which a subscription is unsubscribed.

Examples

'-' or '------': no subscription ever happened.
'--^--': a subscription happened after 2 "frames" of time passed, and the subscription was not unsubscribed.
'--^--!-': on frame 2 a subscription happened, and on frame 5 was unsubscribed.
'500ms ^ 1s !': on frame 500 a subscription happened, and on frame 1,501 was unsubscribed.
*/
