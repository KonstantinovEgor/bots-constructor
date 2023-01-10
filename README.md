# Service for construction simple bots

## Table of content
- [Server](#server)
- [Client](#client)

## Server
### Table of server's content
- [Info](#server-info)
- [Migrations](#server-migrations)

### Server-info
- Node version 18.7.0
- NPM version 8.15.0
- PostgreSQL version 12.x.x
- Support REST API architecture
- Support data base migrations
- Telegram bot API version 6.3

### Server-migrations
1. Global installation package [db-migrate]
```sh
$ npm install -g db-migrate
$ npm install -g db-migrate-pg
```
2. Creating migrate files
```sh
$ db-migrate create NAME_BRANCH --sql-file true --config ./config/config.json
```
3. A NUMBERS-NAME_BRANCH-up.sql file was created in the folder migrations/sqls. Inside it we write sql code to add to database.
4. Our migrations will be loaded the next time run the program.
5. If there is a problem with executing scripts, then run this scripts
```sh
$ Set-ExecutionPolicy RemoteSigned -Scope Proces
```

## Client