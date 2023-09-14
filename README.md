# My Kanban App

This is a NodeJS application with Typescript that manages a Kanban system with projects, tasks, and users. It uses an hexagonal architecture with vertical slicing and screaming architecture.

## Getting Started

To run the application, you need to have NodeJS and npm installed. You also need to set the environment variables in the `.env` file.

To install the dependencies, run:

```
npm install
```

To start the application, run:

```
npm start
```

To run the tests, run:

```
npm test
```

## API

The API has the following endpoints:

### Projects

- `GET /projects`: Get all projects
- `GET /projects/:id`: Get a project by ID
- `POST /projects`: Create a new project
- `PUT /projects/:id`: Update a project by ID
- `DELETE /projects/:id`: Delete a project by ID

### Tasks

- `GET /tasks`: Get all tasks
- `GET /tasks/:id`: Get a task by ID
- `POST /tasks`: Create a new task
- `PUT /tasks/:id`: Update a task by ID
- `DELETE /tasks/:id`: Delete a task by ID

### Users

- `GET /users`: Get all users
- `GET /users/:id`: Get a user by ID
- `POST /users`: Create a new user
- `PUT /users/:id`: Update a user by ID
- `DELETE /users/:id`: Delete a user by ID

## Database

The application can connect to either a MongoDB or a Postgresql database. To configure the database, set the `DB_TYPE`, `DB_HOST`, `DB_PORT`, `DB_NAME`, `DB_USER`, and `DB_PASSWORD` environment variables in the `.env` file.

## Docker

To run the application in a Docker container, run:

```
docker-compose up
```

## License

This project is licensed under the MIT License.