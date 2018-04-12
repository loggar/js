# SIMS - Job Scheduler

## Install NodeJS

Install git

```
$ yum install git
```

Download nvm

```
$ git clone git://github.com/creationix/nvm.git ~/.nvm
```

Install nvm

```
$ source /root/.nvm/nvm.sh
```

Install nodejs with specific version

```
$ nvm install v8.10.0

$ nvm ls
```


## Install Ecosystem Manager

```
$ npm install pm2 -g

$ pm2 ls
```

## Deploy Applications

> ~/job_schedulers

```
$ npm install
```

## Ecosystem of Application Jobs with Environment value

> ecosystem.config.js

```
apps: [
	{
		name: "track-attend-record",
		script: "./src-jobs/track-attend-record.js",
		watch: true,
		env: {
			"PORT": 29110,
			"NODE_ENV": "development"
		},
		env_production: {
			"PORT": 29110,
			"NODE_ENV": "production",
		}
	},
	{
		name: "validate-del-flag",
		script: "./src-jobs/validate-del-flag.js",
		watch: true,
		env: {
			"PORT": 29120,
			"NODE_ENV": "development"
		},
		env_production: {
			"PORT": 29120,
			"NODE_ENV": "production",
		}
	}
]
```

Start Application Jobs with env option.

```
$ pm2 start ecosystem.config.js
```

Or in production : 

```
$ pm2 start ecosystem.config.js --env production
```

## Generating a startup script

To get the automatically-configured startup script for your machine you need to type this command:

```
$ pm2 startup
```

Once you started all the applications you want to manage, you can save the list across expected/unexpected server restart by typing this command:

```
$ pm2 save
```

### Manually resurrect processes

This brings back previously saved processes (via pm2 save):

```
$ pm2 resurrect
```

### Update startup script

To update the startup script (in case you changed the Node.js version via NVM for example) run the following commands:

```
$ pm2 unstartup
$ pm2 startup
```

### SystemD installation checking

```
# Check if pm2-<USER> service has been added
$ systemctl list-units
# Check logs
$ journalctl -u pm2-<USER>
# Cat systemd configuration file
$ systemctl cat pm2-<USER>
# Analyze startup
$ systemd-analyze plot > output.svg
```

To wait efficiently that machine is online for PM2 to run:

```
To wait efficiently that machine is online for PM2 to run:
```

## Disabling Ecosystem of Application Jobs

Disabling startup system

```
$ pm2 unstartup
```

Stop/Delete applications

```
$ pm2 stop all

$ pm2 delete all
```


