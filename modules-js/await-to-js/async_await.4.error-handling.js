async function asyncTask(cb) {
	try {
		const user = await UserModel.findById(1);
		if (!user) return cb('No user found');
	} catch (e) {
		return cb('Unexpected error occurred');
	}

	try {
		const savedTask = await TaskModel({ userId: user.id, name: 'Demo Task' });
	} catch (e) {
		return cb('Error occurred while saving task');
	}

	if (user.notificationsEnabled) {
		try {
			await NotificationService.sendNotification(user.id, 'Task Created');
		} catch (e) {
			return cb('Error while sending notification');
		}
	}

	if (savedTask.assignedUser.id !== user.id) {
		try {
			await NotificationService.sendNotification(savedTask.assignedUser.id, 'Task was created for you');
		} catch (e) {
			return cb('Error while sending notification');
		}
	}

	cb(null, savedTask);
}
