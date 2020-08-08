# BFF | Server

> The brain of application 🧠

## What was used:

- cors;
- dotenv;
- express;
- knex;
- prettier;
- sqlite3;
- typescript;
- eslint.

## Scripts:

```
  # Comand to run dev server
  npm start

  # Comand to create a migration
  npm run knex:migrate

  # Comand to revert a migration
  npm run knex:migrate:rollback
```

## Diagram of node Architecture

<p align="center">
  <img src="./images/NWL-Rockeatseat.png" alt="Diagram node NLW">
</p>

## Features

### Connections

- [x] End point for list all connections;
- [x] End point for make a connection;

### Aulas

- [x] End point for create one class route;
- [x] End point for list all classes;
  - [x] Filter class by discipline, week day, hour;
