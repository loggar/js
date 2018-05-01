// If you need to do multiple async operations, this will be terribly slow, because you await each operation before starting a new one:

{
	let file1 = await getFile(filename1);
	let file2 = await getFile(filename2);
	let file3 = await getFile(filename3);
}

// Instead, we can run all three async operations in parallel, and hopefully get the results three times faster:

{
	// This works because functions that async-await uses
	// Promises under the hood:
	let [file1, file2, file3] = await Promise.all([
		getFile(filename1),
		getFile(filename2),
		getFile(filename3),
	]);
}