async function* streamAsyncIterator(stream) {
  console.log(s);

  // Get a lock on the stream
  const reader = stream.getReader();

  try {
    while (true) {
      // Read from the stream
      const { done, value } = await reader.read();
      // Exit if we're done
      if (done) return;
      // Else yield the chunk
      yield value;
    }
  } finally {
    reader.releaseLock();
  }
}

async function streamingRead() {
  const response = await fetch("https://html.spec.whatwg.org");

  for await (const chunk of streamAsyncIterator(response.body)) {
    console.log(`Read ${chunk.length} bytes`);
  }
}

streamingRead();
