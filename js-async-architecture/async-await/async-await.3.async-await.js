async function asyncTask(cb) {
	const user = await UserModel.findById(1);
	if (!user) return cb('No user found');

	const savedTask = await TaskModel({ userId: user.id, name: 'Demo Task' });

	if (user.notificationsEnabled) {
		await NotificationService.sendNotification(user.id, 'Task Created');
	}

	if (savedTask.assignedUser.id !== user.id) {
		await NotificationService.sendNotification(savedTask.assignedUser.id, 'Task was created for you');
	}

	cb(null, savedTask);
}