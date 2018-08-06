# forever

Node.js Process Manager

## install

global

```shell
$ [sudo] npm install forever -g
```

If you are using forever programmatically you should install forever-monitor.

```shell
$ cd /path/to/your/project
$ [sudo] npm install forever-monitor
```

## Usage

cli

```shell
forever start app.js
```

see options

```shell
$ forever --help
```

`-m`  `MAX`          Only run the specified script MAX times

```shell
$ forever -m 5 examples/error-on-timer.js
```

## JSON Configuration Files

```json
// forever/development.json
{
    // Comments are supported
    "uid": "app",
    "append": true,
    "watch": true,
    "script": "index.js",
    "sourceDir": "/home/myuser/app"
}
```

```shell
$ forever start ./forever/development.json
```

Multi-App Configuration Files

```json
[
  {
    // App1
    "uid": "app1",
    "append": true,
    "watch": true,
    "script": "index.js",
    "sourceDir": "/home/myuser/app1"
  },
  {
    // App2
    "uid": "app2",
    "append": true,
    "watch": true,
    "script": "index.js",
    "sourceDir": "/home/myuser/app2",
    "args": ["--port", "8081"]
  }
]
```

## Using In Javascript Code

```js
forever.startServer(child);
```

## Logging and output file locations

```shell
FOREVER_ROOT=/etc/forever forever start index.js
```
