# NestJS swagger auto doc bug

This repository shows what's wrong with Swagger generation.

## Usage

### Installation

Install nest cli:

```
$ sudo npm i -g @nestjs/cli
```

Clone this repo:

```
$ git clone git@github.com:PoOwAa/nestjs-swagger-body-param-bug.git
```

Change directory

```
$ cd swaggerbug
```

Install dependencies

```
$ npm i
```

Start nest application

```
$ npm run start
$ npm run start:dev  # config: nest-cli.json
$ npm run start:long # config: nest-cli-long.json
```

### Check swagger documentation

1. Open a browser at http://localhost:3000/swagger
2. Check the endpoints and their parameters

## NestJS version

```
 _   _             _      ___  _____  _____  _     _____
| \ | |           | |    |_  |/  ___|/  __ \| |   |_   _|
|  \| |  ___  ___ | |_     | |\ `--. | /  \/| |     | |
| . ` | / _ \/ __|| __|    | | `--. \| |    | |     | |
| |\  ||  __/\__ \| |_ /\__/ //\__/ /| \__/\| |_____| |_
\_| \_/ \___||___/ \__|\____/ \____/  \____/\_____/\___/


[System Information]
OS Version     : Linux 5.3
NodeJS Version : v12.16.1
NPM Version    : 6.14.4

[Nest CLI]
Nest CLI Version : 7.1.2

[Nest Platform Information]
platform-express version : 7.0.0
swagger version          : 4.5.1
common version           : 7.0.0
core version             : 7.0.0
```
