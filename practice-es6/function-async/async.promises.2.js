async function createEmployeeWorkflow(cb) {
	var err;

	try {
		var employee = await createEmployee();

		if (employee.needsManager()) {
			var manager = await selectManager(employee);
			employee.manager = manager;
		}

		await saveEmployee(employee);
	} catch (ex) {
		err = ex;
	}

	cb(err, employee);
}

async function createEmployee() {
	return new Promise((resolve, reject) => {

		// do stuff here to create the employee
		var employee = { b: true };

		// now check if it worked or not
		if (/* some success case */ employee.b) {
			resolve(employee);
		} else {
			reject(someError);
		}

	});
}